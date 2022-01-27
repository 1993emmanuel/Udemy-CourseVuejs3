<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post"  v-for="(post,index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="updates" v-if="!user">
      <div class="container">
        <h2>Never miss post. Register for free account today!.</h2>
        <router-link class="router-button" to="#">
          Register for FireBlogs<Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Arrow from '../assets/Icons/arrow-right-light.svg';
  import BlogPost from '../components/BlogPost.vue';
  import BlogCard from '../components/BlogCard.vue';
export default {
  name: "Home",
  components: {
    Arrow,
    BlogPost,
    BlogCard,
  },
  data(){
    return{
      welcomeScreen:{
        title : 'Welcome!',
        blogPost: 'weekly blog articles with all things programing inlcuding HTML,CSS,JS and more. Register today to never miss a post!',
        welcomeScreen:true,
        photo : "coding",
      },
      sampleBlogPost:[
        {
          title: "this is a filler title",
          blogHtml : 'this is a filler blog post title',
          blogCoverPhoto : 'beautiful-stories',
        },
        {
          title: "this is a filler title2",
          blogHtml : 'this is a filler blog post title2',
          blogCoverPhoto : 'beautiful-stories',
        }
      ],
    };
  },
  computed:{
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards
    },
    user(){
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates{
  .container{
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 800px){
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button{
      display:flex;
      font-size: 14px;
      text-decoration: none;
      @media(min-width: 800px){
        margin-left: auto;
      }
    }
    h2{
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px){
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}

</style>