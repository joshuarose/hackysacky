import {observable} from 'mobx'

class StoryStore {
  @observable topStoryIds = [];
  @observable stories = [];

  getStories(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then((response) => response.json())
        .then((json) => this.topStoryIds = json)
        .then(() => this.getStoryDetails())
        .catch((err) => console.log(err));
  }
  
  getStoryDetails(){
    var storyArr = [];
    this.topStoryIds.slice(0,50).map((id) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response) => response.json())
          .then((json) => storyArr.push({'id': json.id, 'title': json.title, 'text': json.text, 'url': json.url}))
          .then(() => this.stories = storyArr)
          .catch((err) => console.log(err));
    });
  }
}

const storyStore = new StoryStore();
export default storyStore;