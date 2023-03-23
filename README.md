# Bookshelf App (Vue.js)
[![wakatime](https://wakatime.com/badge/github/helen25sur/Bookshelf-app.svg)](https://wakatime.com/badge/github/helen25sur/Bookshelf-app)

### Deploy: https://helen25sur.github.io/Bookshelf-app/

## Teqnologies
  * Vue.js
  * Vue router
  * Vuex
  * Vuetify
  * Firebase
  * Google Book Api
  * Books API (NYTimes)

## App Components & Views
```
| APP
   |__ AppHeader
   
   |   HomeView
   -----------------
     |__ LoaderComponent 
     
   |  BooksListView
   -----------------
     |__ LoaderComponent 
     |   BookDetailView
     -----------------
         |__ LoaderComponent
         
   |  WishListBooksView
   --------------------
      |__ LoaderComponent
    
   |  ReadBooksView
   --------------------
      |__ LoaderComponent
      
   |  UserProfileView
   --------------------
      |__ LoaderComponent
      
   |  SignInView
   -------------
   |  LogInView
   -------------
   
   |__ AppFooter

```

## Scheme of application (before developing)
<img src="https://user-images.githubusercontent.com/65970892/227387777-e3bbf0a3-68f1-46e9-8e2f-0de9bd8157dc.png" width="650"> <img src="https://user-images.githubusercontent.com/65970892/227388280-b569d4c7-453a-4d8a-96aa-8a10047a2ef0.png" width="150">

* grey color - not implement



### Desktop view
![Desktop version](https://user-images.githubusercontent.com/65970892/224556144-af9be56e-e128-4ccf-85ee-fa459a5dfaea.png)
![Desktop version Books](https://user-images.githubusercontent.com/65970892/224556253-7d8ad2c6-55e4-4b38-94f2-4c2410cf01a2.png)
![Desktop Book Detail](https://user-images.githubusercontent.com/65970892/227383991-77eb6c7d-3ea5-4041-99aa-7bab1c682509.png)
![Desktop version Wishlist](https://user-images.githubusercontent.com/65970892/227383853-d704c7a8-6049-4619-8b20-8a8173612587.png)
![User Profile](https://user-images.githubusercontent.com/65970892/227384104-95a2e5d7-6fae-4365-99e3-6a989d40e628.png)

### Mobile view
<img src="https://user-images.githubusercontent.com/65970892/224556600-1fcbab82-af7b-40ab-bdda-66a2dd705687.png" alt="helen25sur github io_Bookshelf-app_books(iPhone 12 Pro)" width="300"> <img src="https://user-images.githubusercontent.com/65970892/224556614-ac5b21a4-01c4-4384-b67c-8a0749a834ee.png" alt="helen25sur github io_Bookshelf-app_books(iPhone XR)" width="300"> <img src="https://user-images.githubusercontent.com/65970892/227384412-167fd4f8-c8b8-434f-99eb-d485ee61405d.png" alt="helen25sur github io_Bookshelf-app_books(iPhone XR)" width="300"> <img src="https://user-images.githubusercontent.com/65970892/227384627-4a2e98d2-7e17-4168-b35d-f35331cac9f0.png" alt="helen25sur github io_Bookshelf-app_books(iPhone XR)" width="300"><img src="https://user-images.githubusercontent.com/65970892/227384861-ff2bb040-18c8-4c7a-99ca-662290e8eea1.png" alt="helen25sur github io_Bookshelf-app_books(iPhone XR)" width="300"><img src="https://user-images.githubusercontent.com/65970892/227385005-0da8139a-36cb-4354-9be7-134bf284fc57.png" alt="helen25sur github io_Bookshelf-app_books(iPhone XR)" width="300">

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
