(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1999:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(5480),r(7867),r(5866);var s=r(3191),a=r(8716),i=r(7922),n=r.n(i),l=r(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5480)),"/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7867)),"/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/app/page.tsx"],u="/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2250:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},930:(e,t,r)=>{Promise.resolve().then(r.bind(r,4433)),Promise.resolve().then(r.bind(r,8015)),Promise.resolve().then(r.bind(r,4690))},6266:(e,t,r)=>{Promise.resolve().then(r.bind(r,7955))},7955:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(326),a=r(7577),i=r(9167),n=r(7407),l=r(434);function o({article:e,categoryColorMap:t={}}){let r=new Date(e.publishedAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),a=t[e.category]||"bg-gray-100 text-gray-700";return s.jsx(l.default,{href:`/articles/${e.id}`,children:(0,s.jsxs)("div",{className:"card group cursor-pointer",children:[s.jsx("div",{className:"h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden",children:e.imageUrl?s.jsx("img",{src:e.imageUrl,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}):s.jsx("div",{className:"w-full h-full flex items-center justify-center text-5xl opacity-30",children:"\uD83D\uDCF0"})}),(0,s.jsxs)("div",{className:"p-4",children:[s.jsx("span",{className:`text-xs font-medium px-2 py-1 rounded-full ${a}`,children:e.category}),s.jsx("h2",{className:"mt-2 text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors",children:e.title}),s.jsx("p",{className:"mt-1 text-sm text-gray-500 line-clamp-2",children:e.summary}),(0,s.jsxs)("div",{className:"mt-3 flex items-center justify-between text-xs text-gray-400",children:[(0,s.jsxs)("span",{children:["By ",e.author?.username]}),s.jsx("span",{children:r})]})]})]})})}function c({currentPage:e,totalPages:t,hasNextPage:r,onPageChange:a}){return t<=1?null:(0,s.jsxs)("div",{className:"flex items-center justify-center gap-2 mt-8",children:[s.jsx("button",{onClick:()=>a(e-1),disabled:e<=1,className:"btn-secondary disabled:opacity-40",children:"← Previous"}),(0,s.jsxs)("span",{className:"text-sm text-gray-600 px-4",children:["Page ",e," of ",t]}),s.jsx("button",{onClick:()=>a(e+1),disabled:!r,className:"btn-secondary disabled:opacity-40",children:"Next →"})]})}function d(){let[e,t]=(0,a.useState)(1),[r,l]=(0,a.useState)(void 0),{data:d}=(0,i.aM)(n.Fk),u=d?.categories||[],m={};u.forEach(e=>{m[e.name]=e.color});let{data:x,loading:g,error:h}=(0,i.aM)(n.Me,{variables:{pagination:{page:e,limit:9},category:r}}),p=e=>{l("all"===e?void 0:e),t(1)},y=x?.articles;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-center mb-8",children:[s.jsx("h1",{className:"text-4xl font-bold text-gray-900",children:"Latest Headlines"}),s.jsx("p",{className:"text-gray-500 mt-2",children:"Stay informed with the latest news"})]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2 mb-8 justify-center",children:[s.jsx("button",{onClick:()=>p("all"),className:`px-4 py-1.5 rounded-full text-sm font-medium transition-colors capitalize
            ${r?"bg-white text-gray-600 border border-gray-200 hover:border-blue-400":"bg-blue-600 text-white"}`,children:"all"}),u.map(e=>s.jsx("button",{onClick:()=>p(e.name),className:`px-4 py-1.5 rounded-full text-sm font-medium transition-colors capitalize
              ${e.name===r?"bg-blue-600 text-white":"bg-white text-gray-600 border border-gray-200 hover:border-blue-400"}`,children:e.name},e.name))]}),g&&s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Array.from({length:9}).map((e,t)=>(0,s.jsxs)("div",{className:"card animate-pulse",children:[s.jsx("div",{className:"h-48 bg-gray-200"}),(0,s.jsxs)("div",{className:"p-4 space-y-3",children:[s.jsx("div",{className:"h-3 bg-gray-200 rounded w-1/4"}),s.jsx("div",{className:"h-4 bg-gray-200 rounded w-full"}),s.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),s.jsx("div",{className:"h-3 bg-gray-200 rounded w-1/2"})]})]},t))}),h&&(0,s.jsxs)("div",{className:"text-center py-12",children:[s.jsx("p",{className:"text-red-500 text-lg",children:"Failed to load articles"}),s.jsx("p",{className:"text-gray-400 text-sm mt-1",children:h.message})]}),y&&(0,s.jsxs)(s.Fragment,{children:[0===y.articles.length?s.jsx("div",{className:"text-center py-12",children:s.jsx("p",{className:"text-gray-400 text-lg",children:"No articles found"})}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:y.articles.map(e=>s.jsx(o,{article:e,categoryColorMap:m},e.id))}),(0,s.jsxs)("p",{className:"text-center text-sm text-gray-400 mt-4",children:["Showing ",y.articles.length," of ",y.totalCount," articles"]}),s.jsx(c,{currentPage:y.currentPage,totalPages:y.totalPages,hasNextPage:y.hasNextPage,onPageChange:t})]})]})}},4433:(e,t,r)=>{"use strict";r.d(t,{ApolloWrapper:()=>y});var s=r(326),a=r(9592),i=r(4179),n=r(126),l=r(8325),o=r(7277),c=r(9790),d=r(1627);let u=process.env.NEXT_PUBLIC_GRAPHQL_URL||"http://localhost:4000/graphql",m=(0,i.L)({uri:u}),x=(0,c.v)((e,{headers:t})=>({headers:{...t}})),g=(0,d.q)(({graphQLErrors:e,networkError:t})=>{e&&e.forEach(({message:e,extensions:t})=>{console.error(`[GraphQL error]: ${e}`),t?.code}),t&&console.error(`[Network error]: ${t}`)}),h=new n.h({typePolicies:{Query:{fields:{articles:{keyArgs:["category"],merge:(e,t)=>t}}}}}),p=new l.f({link:(0,o.D)([g,x,m]),cache:h,defaultOptions:{watchQuery:{fetchPolicy:"cache-and-network"}}});function y({children:e}){return s.jsx(a.e,{client:p,children:e})}},8015:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(326),a=r(434),i=r(4690),n=r(5047);function l(){let{user:e,isAuthenticated:t,logout:r}=(0,i.a)(),l=(0,n.useRouter)();return s.jsx("nav",{className:"bg-white border-b border-gray-200 sticky top-0 z-50",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"flex justify-between items-center h-16",children:[s.jsx(a.default,{href:"/",className:"flex items-center gap-2",children:s.jsx("span",{className:"text-2xl font-bold text-blue-600",children:"\uD83D\uDCF0 NewsApp"})}),(0,s.jsxs)("div",{className:"hidden sm:flex items-center gap-6",children:[s.jsx(a.default,{href:"/",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Headlines"}),s.jsx(a.default,{href:"/videos",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Videos"})]}),s.jsx("div",{className:"flex items-center gap-3",children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:"text-sm text-gray-600",children:["Hi, ",s.jsx("strong",{children:e?.username})]}),s.jsx("button",{onClick:()=>{r(),l.push("/")},className:"btn-secondary text-sm",children:"Logout"})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.default,{href:"/auth/login",className:"text-gray-600 hover:text-blue-600 text-sm",children:"Login"}),s.jsx(a.default,{href:"/auth/register",className:"btn-primary text-sm",children:"Sign Up"})]})})]})})})}},4690:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>n,a:()=>l});var s=r(326),a=r(7577);let i=(0,a.createContext)({user:null,isLoading:!0,isAuthenticated:!1,isAdmin:!1,login:()=>{},logout:()=>{}});function n({children:e}){let[t,r]=(0,a.useState)(null),[n,l]=(0,a.useState)(!0),o=(0,a.useCallback)((e,t)=>{localStorage.setItem("authToken",e),localStorage.setItem("user",JSON.stringify(t)),r(t)},[]),c=(0,a.useCallback)(()=>{localStorage.removeItem("authToken"),localStorage.removeItem("user"),r(null)},[]);return s.jsx(i.Provider,{value:{user:t,isLoading:n,isAuthenticated:null!==t,isAdmin:t?.role==="admin",login:o,logout:c},children:e})}function l(){let e=(0,a.useContext)(i);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},7407:(e,t,r)=>{"use strict";r.d(t,{Fk:()=>n,Me:()=>a,Nz:()=>c,Rh:()=>i,XM:()=>l,ym:()=>o});var s=r(4293);let a=(0,s.Ps)`
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
`},7867:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>o});var s=r(9510);r(5023);var a=r(8570);let i=(0,a.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/components/ApolloWrapper.tsx#ApolloWrapper`),n=(0,a.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/context/AuthContext.tsx#AuthProvider`);(0,a.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/context/AuthContext.tsx#useAuth`);let l=(0,a.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/components/Navbar.tsx#default`),o={title:"NewsApp — Latest Headlines",description:"Stay updated with the latest news from around the world."};function c({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:"bg-gray-50 min-h-screen",children:s.jsx(i,{children:(0,s.jsxs)(n,{children:[s.jsx(l,{}),s.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e})]})})})})}},5480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(8570).createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/app/page.tsx#default`)},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[985,16,167],()=>r(1999));module.exports=s})();