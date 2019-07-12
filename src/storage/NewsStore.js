import { action, observable, decorate } from 'mobx';

class NewsStore {

  constructor() {
    this.categories = ['technology', 'science', 'health'];
    this.state = {
      news: [],
      currentCategory: '',
      isRefreshing: true,
    }
    this.setCategories();
  }

  fetchNews = async (category) => {
    const urlString = 'https://newsapi.org/v2/top-headlines?category=' + category + '&apiKey=a938696adaf041b296f2f27e24f5ac01';
    
    const response = await fetch(urlString),
          responseJson = await response.json(),
          news = responseJson.articles.map(item => {
            return {...item, key: (item.publishedAt || '') +  Date.now()}
          })
    
    return news;
  }

  setCategories = () => {
    this.categories.forEach(async (category) => {
      const categoryData = await this.fetchNews(category);
      this.state.news[category] = categoryData;
    });
    this.state.isRefreshing = false;
  }

  setCurrentCategory = (category) => {
    this.state.currentCategory = category;
  }

  refreshing = async () => {
    this.state.isRefreshing = true;
    const news = await this.fetchNews(this.state.currentCategory);
    this.state.news[this.state.currentCategory] = news;
    this.state.isRefreshing = false;
  }

  get getCategoryNews() {
    return this.state.news[this.state.currentCategory];
  }
}

decorate(NewsStore, {
  currentCategory: observable,
  isRefreshing: observable,
  setCurrentCategory: action
});

const newsStore = new NewsStore();
export default newsStore;