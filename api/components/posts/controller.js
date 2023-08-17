const uuid = require('uuid');
const faker = require('faker');
// const boom = require('@hapi/boom');

class PostController {
    constructor() {
        this.posts = [];
        this.generate();
    }
    generate() {
      const limit = 5;
      for ( let index = 0; index < limit; index++ ) {
        this.posts.push({
          id: faker.datatype.uuid(),
          content: 'Lorem ipsum dolor sit amet',
          image: faker.image.imageUrl(),
          createdBy: faker.name.firstName(),
          createdAt: faker.date.past(),
          updateAt: faker.date.recent(),
        });
      }
    }

    list() {
        return this.posts;
    }

    get(id) {
        const post = this.posts.find(item => item.id === id);
        if (!post) {
            // throw boom.notFound('Post not found');
        }
        return post;
    }

    create(data) {
        const post = {
            id: faker.datatype.uuid(),
            createdBy: new Date().toISOString(),
            updateAt: null,
            ...data
        }
        this.posts.push(post);
        return post;
    }

    update(id, data) {
        const index = this.posts.findIndex(item => item.id === id);
        if (index === -1) {
            // throw boom.notFound('Post not found');
        }
        const post = {
            ...this.posts[index],
            ...data
        }
        this.posts[index] = post;
        return post;
    }

    remove(id) {
        const index = this.posts.findIndex(item => item.id === id);
        if (index > -1) {
          this.posts.splice(index, 1);
        }
    }
}

module.exports = () => {
    return new PostController();
}
