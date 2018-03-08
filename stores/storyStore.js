import {observable} from 'mobx'

class StoryStore {
  @observable topStoryIds = [];
  @observable stories = [];
  @observable comments = [];
  @observable pageNum = 1;

  getStories(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then((response) => response.json())
        .then((json) => this.topStoryIds = json)
        .then(() => this.getStoryDetails())
        .catch((err) => console.log(err));
  }

  getComments(story){
    var commentArr = [];
    story.kids.map((id) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response) => response.json())
          .then((json) => commentArr.push({'id': json.id, 'text': json.text }))
          .then(() => this.comments = commentArr)
          .catch((err) => console.log(err));
    });
  }
  
  getStoryDetails(){
    var storyArr = [];
    this.topStoryIds.slice(0,50).map((id) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response) => response.json())
          .then((json) => storyArr.push({'id': json.id, 'title': json.title, 'text': json.text, 'url': json.url, 'commentCount': json.descendants, 'kids': json.kids}))
          .then(() => this.stories = storyArr)
          .catch((err) => console.log(err));
    });
  }

  getMoreStories(){
    const startNum = this.pageNum * 50;
    this.pageNum = this.pageNum + 1;
    const endNum = this.pageNum * 50;
    this.topStoryIds.slice(startNum, endNum).map((id) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response) => response.json())
          .then((json) => this.stories.push({'id': json.id, 'title': json.title, 'text': json.text, 'url': json.url, 'commentCount': json.descendants, 'kids': json.kids}))
          .catch((err) => console.log(err));
    });
  }
}

const storyStore = new StoryStore();
export default storyStore;