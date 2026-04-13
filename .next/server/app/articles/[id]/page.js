(()=>{var e={};e.id=422,e.ids=[422],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4050:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c}),r(8878),r(7867),r(5866);var s=r(3191),a=r(8716),i=r(7922),n=r.n(i),l=r(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["articles",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8878)),"/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/app/articles/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,7867)),"/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/app/articles/[id]/page.tsx"],u="/articles/[id]/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/articles/[id]/page",pathname:"/articles/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2250:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},2852:(e,t,r)=>{Promise.resolve().then(r.bind(r,7872))},930:(e,t,r)=>{Promise.resolve().then(r.bind(r,4433)),Promise.resolve().then(r.bind(r,8015)),Promise.resolve().then(r.bind(r,4690))},7872:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(326),a=r(9167),i=r(5047),n=r(7407);function l(){let e=(0,i.useParams)(),t=(0,i.useRouter)(),r=e.id,{data:l,loading:o,error:c}=(0,a.aM)(n.Rh,{variables:{id:r}});if(o)return(0,s.jsxs)("div",{className:"max-w-3xl mx-auto animate-pulse",children:[s.jsx("div",{className:"h-8 bg-gray-200 rounded w-3/4 mb-4"}),s.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/3 mb-8"}),s.jsx("div",{className:"space-y-3",children:Array.from({length:8}).map((e,t)=>s.jsx("div",{className:"h-4 bg-gray-200 rounded"},t))})]});if(c||!l?.article)return(0,s.jsxs)("div",{className:"text-center py-12",children:[s.jsx("p",{className:"text-red-500 text-lg",children:"Article not found"}),s.jsx("button",{onClick:()=>t.back(),className:"btn-secondary mt-4",children:"← Go Back"})]});let d=l.article,u=new Date(d.publishedAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(0,s.jsxs)("article",{className:"max-w-3xl mx-auto",children:[s.jsx("button",{onClick:()=>t.back(),className:"text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-1 text-sm",children:"← Back to headlines"}),s.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 capitalize",children:d.category}),s.jsx("h1",{className:"text-3xl font-bold text-gray-900 mt-3 leading-tight",children:d.title}),(0,s.jsxs)("div",{className:"flex items-center gap-4 mt-4 text-sm text-gray-500",children:[(0,s.jsxs)("span",{children:["By ",s.jsx("strong",{className:"text-gray-700",children:d.author?.username})]}),s.jsx("span",{children:"\xb7"}),s.jsx("span",{children:u})]}),d.imageUrl&&s.jsx("img",{src:d.imageUrl,alt:d.title,className:"w-full h-64 object-cover rounded-xl mt-6"}),s.jsx("p",{className:"mt-6 text-lg text-gray-600 font-medium leading-relaxed border-l-4 border-blue-500 pl-4",children:d.summary}),s.jsx("div",{className:"mt-6 prose prose-gray max-w-none",children:d.content.split("\n").map((e,t)=>e.trim()?s.jsx("p",{className:"mb-4 text-gray-700 leading-relaxed",children:e},t):null)})]})}},4433:(e,t,r)=>{"use strict";r.d(t,{ApolloWrapper:()=>y});var s=r(326),a=r(9592),i=r(4179),n=r(126),l=r(8325),o=r(7277),c=r(9790),d=r(1627);let u=process.env.NEXT_PUBLIC_GRAPHQL_URL||"http://localhost:4000/graphql",m=(0,i.L)({uri:u}),p=(0,c.v)((e,{headers:t})=>({headers:{...t}})),x=(0,d.q)(({graphQLErrors:e,networkError:t})=>{e&&e.forEach(({message:e,extensions:t})=>{console.error(`[GraphQL error]: ${e}`),t?.code}),t&&console.error(`[Network error]: ${t}`)}),h=new n.h({typePolicies:{Query:{fields:{articles:{keyArgs:["category"],merge:(e,t)=>t}}}}}),g=new l.f({link:(0,o.D)([x,p,m]),cache:h,defaultOptions:{watchQuery:{fetchPolicy:"cache-and-network"}}});function y({children:e}){return s.jsx(a.e,{client:g,children:e})}},8015:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(326),a=r(434),i=r(4690),n=r(5047);function l(){let{user:e,isAuthenticated:t,logout:r}=(0,i.a)(),l=(0,n.useRouter)();return s.jsx("nav",{className:"bg-white border-b border-gray-200 sticky top-0 z-50",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"flex justify-between items-center h-16",children:[s.jsx(a.default,{href:"/",className:"flex items-center gap-2",children:s.jsx("span",{className:"text-2xl font-bold text-blue-600",children:"\uD83D\uDCF0 NewsApp"})}),(0,s.jsxs)("div",{className:"hidden sm:flex items-center gap-6",children:[s.jsx(a.default,{href:"/",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Headlines"}),s.jsx(a.default,{href:"/videos",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Videos"})]}),s.jsx("div",{className:"flex items-center gap-3",children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:"text-sm text-gray-600",children:["Hi, ",s.jsx("strong",{children:e?.username})]}),s.jsx("button",{onClick:()=>{r(),l.push("/")},className:"btn-secondary text-sm",children:"Logout"})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.default,{href:"/auth/login",className:"text-gray-600 hover:text-blue-600 text-sm",children:"Login"}),s.jsx(a.default,{href:"/auth/register",className:"btn-primary text-sm",children:"Sign Up"})]})})]})})})}},4690:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>n,a:()=>l});var s=r(326),a=r(7577);let i=(0,a.createContext)({user:null,isLoading:!0,isAuthenticated:!1,isAdmin:!1,login:()=>{},logout:()=>{}});function n({children:e}){let[t,r]=(0,a.useState)(null),[n,l]=(0,a.useState)(!0),o=(0,a.useCallback)((e,t)=>{localStorage.setItem("authToken",e),localStorage.setItem("user",JSON.stringify(t)),r(t)},[]),c=(0,a.useCallback)(()=>{localStorage.removeItem("authToken"),localStorage.removeItem("user"),r(null)},[]);return s.jsx(i.Provider,{value:{user:t,isLoading:n,isAuthenticated:null!==t,isAdmin:t?.role==="admin",login:o,logout:c},children:e})}function l(){let e=(0,a.useContext)(i);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},7407:(e,t,r)=>{"use strict";r.d(t,{Fk:()=>n,Me:()=>a,Nz:()=>c,Rh:()=>i,XM:()=>l,ym:()=>o});var s=r(4293);let a=(0,s.Ps)`
  query GetArticles($pagination: PaginationInput, $category: String) {
    articles(pagination: $pagination, category: $category) {
      articles {
        id
        title
        summary
        author { id username }
        category
        imageUrl
        publishedAt
      }
      totalCount
      currentPage
      totalPages
      hasNextPage
    }
  }
`,i=(0,s.Ps)`
  query GetArticle($id: ID!) {
    article(id: $id) {
      id
      title
      content
      summary
      author { id username }
      category
      imageUrl
      publishedAt
      createdAt
    }
  }
`;(0,s.Ps)`
  query SearchArticles($keyword: String!, $pagination: PaginationInput) {
    searchArticles(keyword: $keyword, pagination: $pagination) {
      articles {
        id
        title
        summary
        author { id username }
        category
        publishedAt
      }
      totalCount
      currentPage
      totalPages
      hasNextPage
    }
  }
`;let n=(0,s.Ps)`
  query GetCategories {
    categories {
      id
      name
      slug
      color
    }
  }
`,l=(0,s.Ps)`
  query GetVideos($pagination: PaginationInput, $category: String) {
    videos(pagination: $pagination, category: $category) {
      videos {
        id
        title
        description
        videoUrl
        videoType
        thumbnailUrl
        category
        duration
        publishedAt
      }
      totalCount
      currentPage
      totalPages
      hasNextPage
    }
  }
`;(0,s.Ps)`
  query GetVideo($id: ID!) {
    video(id: $id) {
      id
      title
      description
      videoUrl
      videoType
      thumbnailUrl
      category
      duration
      publishedAt
    }
  }
`,(0,s.Ps)`
  query GetMe {
    me {
      id
      email
      username
      role
      createdAt
    }
  }
`;let o=(0,s.Ps)`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        username
        role
      }
    }
  }
`,c=(0,s.Ps)`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        email
        username
        role
      }
    }
  }
`},8878:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(8570).createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/app/articles/[id]/page.tsx#default`)},7867:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>o});var s=r(9510);r(5023);var a=r(8570);let i=(0,a.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/components/ApolloWrapper.tsx#ApolloWrapper`),n=(0,a.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/context/AuthContext.tsx#AuthProvider`);(0,a.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/context/AuthContext.tsx#useAuth`);let l=(0,a.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/components/Navbar.tsx#default`),o={title:"NewsApp — Latest Headlines",description:"Stay updated with the latest news from around the world."};function c({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:"bg-gray-50 min-h-screen",children:s.jsx(i,{children:(0,s.jsxs)(n,{children:[s.jsx(l,{}),s.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e})]})})})})}},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[985,16,167],()=>r(4050));module.exports=s})();