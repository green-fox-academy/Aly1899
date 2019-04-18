import {BlogPost} from './blogPost'
'use strict'

class Blog{
    blogList:BlogPost[]=[];

    add(blogPost:BlogPost){
        this.blogList.push(blogPost);
    }

    delete(index:number){
        this.blogList.splice(index,1)
    }

    update(index:number, blogPost:BlogPost){
        this.blogList.splice(index,1)
        this.blogList.splice(index,0,blogPost)
    }
}

const blog:Blog=new Blog()

const loremIpsum:BlogPost = new BlogPost('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.', '2000.05.04');
const waitButWhy:BlogPost = new BlogPost('Tim Urban','Wait but why','A popular long-form, stick-figure-illustrated blog about almost everything.','2010.10.10');
const oneEngineer:BlogPost = new BlogPost('William Turton','One Engineer Is Trying to Get IBM to Reckon With Trump','Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.','2017.03.28' );

blog.add(loremIpsum);
blog.add(waitButWhy);
blog.add(oneEngineer);

console.log(blog.blogList);

blog.delete(1);

console.log(blog.blogList);

blog.update(1,waitButWhy);

console.log(blog.blogList);