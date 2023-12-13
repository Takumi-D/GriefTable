import axios from "axios";

export default class ServicePosts {
  private getPosts: () => Promise<[]>;

  constructor() {
    this.getPosts = async function fn() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );

        if (response.status !== 200) {
          throw new Error(`Что-то пошло не так! ${response.status}`);
        }

        return await response.data;
      } catch (error) {
        throw new Error(`Что-то пошло не так! ${error}`);
      }
    };
  }
}
