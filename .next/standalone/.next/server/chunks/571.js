exports.id=571,exports.ids=[571],exports.modules={2250:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},930:(e,t,r)=>{Promise.resolve().then(r.bind(r,4433)),Promise.resolve().then(r.bind(r,8015)),Promise.resolve().then(r.bind(r,4690))},4433:(e,t,r)=>{"use strict";r.d(t,{ApolloWrapper:()=>v});var n=r(326),i=r(9592),a=r(4179),s=r(126),o=r(8325),l=r(7277),u=r(9790),c=r(1627);let d=process.env.NEXT_PUBLIC_GRAPHQL_URL||"http://localhost:4000/graphql",m=(0,a.L)({uri:d}),h=(0,u.v)((e,{headers:t})=>({headers:{...t}})),g=(0,c.q)(({graphQLErrors:e,networkError:t})=>{e&&e.forEach(({message:e,extensions:t})=>{console.error(`[GraphQL error]: ${e}`),t?.code}),t&&console.error(`[Network error]: ${t}`)}),p=new s.h({typePolicies:{Query:{fields:{articles:{keyArgs:["category"],merge:(e,t)=>t}}}}}),x=new o.f({link:(0,l.D)([g,h,m]),cache:p,defaultOptions:{watchQuery:{fetchPolicy:"cache-and-network"}}});function v({children:e}){return n.jsx(i.e,{client:x,children:e})}},8015:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(326),i=r(434),a=r(4690),s=r(5047);function o(){let{user:e,isAuthenticated:t,logout:r}=(0,a.a)(),o=(0,s.useRouter)();return n.jsx("nav",{className:"bg-white border-b border-gray-200 sticky top-0 z-50",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"flex justify-between items-center h-16",children:[n.jsx(i.default,{href:"/",className:"flex items-center gap-2",children:n.jsx("span",{className:"text-2xl font-bold text-blue-600",children:"\uD83D\uDCF0 NewsApp"})}),(0,n.jsxs)("div",{className:"hidden sm:flex items-center gap-6",children:[n.jsx(i.default,{href:"/",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Headlines"}),n.jsx(i.default,{href:"/videos",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Videos"})]}),n.jsx("div",{className:"flex items-center gap-3",children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{className:"text-sm text-gray-600",children:["Hi, ",n.jsx("strong",{children:e?.username})]}),n.jsx("button",{onClick:()=>{r(),o.push("/")},className:"btn-secondary text-sm",children:"Logout"})]}):(0,n.jsxs)(n.Fragment,{children:[n.jsx(i.default,{href:"/auth/login",className:"text-gray-600 hover:text-blue-600 text-sm",children:"Login"}),n.jsx(i.default,{href:"/auth/register",className:"btn-primary text-sm",children:"Sign Up"})]})})]})})})}},4690:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>s,a:()=>o});var n=r(326),i=r(7577);let a=(0,i.createContext)({user:null,isLoading:!0,isAuthenticated:!1,isAdmin:!1,login:()=>{},logout:()=>{}});function s({children:e}){let[t,r]=(0,i.useState)(null),[s,o]=(0,i.useState)(!0),l=(0,i.useCallback)((e,t)=>{localStorage.setItem("authToken",e),localStorage.setItem("user",JSON.stringify(t)),r(t)},[]),u=(0,i.useCallback)(()=>{localStorage.removeItem("authToken"),localStorage.removeItem("user"),r(null)},[]);return n.jsx(a.Provider,{value:{user:t,isLoading:s,isAuthenticated:null!==t,isAdmin:t?.role==="admin",login:l,logout:u},children:e})}function o(){let e=(0,i.useContext)(a);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},7407:(e,t,r)=>{"use strict";r.d(t,{Fk:()=>s,Me:()=>i,Nz:()=>u,Rh:()=>a,XM:()=>o,ym:()=>l});var n=r(4293);let i=(0,n.Ps)`
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
`,a=(0,n.Ps)`
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
`;(0,n.Ps)`
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
`;let s=(0,n.Ps)`
  query GetCategories {
    categories {
      id
      name
      slug
      color
    }
  }
`,o=(0,n.Ps)`
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
`;(0,n.Ps)`
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
`,(0,n.Ps)`
  query GetMe {
    me {
      id
      email
      username
      role
      createdAt
    }
  }
`;let l=(0,n.Ps)`
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
`,u=(0,n.Ps)`
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
`},7867:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>l});var n=r(9510);r(5023);var i=r(8570);let a=(0,i.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/components/ApolloWrapper.tsx#ApolloWrapper`),s=(0,i.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/context/AuthContext.tsx#AuthProvider`);(0,i.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/context/AuthContext.tsx#useAuth`);let o=(0,i.createProxy)(String.raw`/Users/kumar1.chavan/Work/Practice/NewsSystem/NewsWebApp/src/components/Navbar.tsx#default`),l={title:"NewsApp — Latest Headlines",description:"Stay updated with the latest news from around the world."};function u({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:"bg-gray-50 min-h-screen",children:n.jsx(a,{children:(0,n.jsxs)(s,{children:[n.jsx(o,{}),n.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e})]})})})})}},5023:()=>{},8753:(e,t,r)=>{"use strict";r.d(t,{D:()=>m});var n=r(5826),i=r(6126),a=r(4837),s=r(208),o=r(6049),l=r(7267),u=r(8571),c=r(1047).Nq?i.useLayoutEffect:i.useEffect,d=r(6127);function m(e,t){!1!==globalThis.__DEV__&&(0,d.G)(t||{},"ignoreResults","useMutation","If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");var r=(0,u.x)(null==t?void 0:t.client);(0,o.Vp)(e,o.n_.Mutation);var m=i.useState({called:!1,loading:!1,client:r}),h=m[0],g=m[1],p=i.useRef({result:h,mutationId:0,isMounted:!0,client:r,mutation:e,options:t});c(function(){Object.assign(p.current,{client:r,options:t,mutation:e})});var x=i.useCallback(function(e){void 0===e&&(e={});var t=p.current,r=t.options,i=t.mutation,o=(0,n.pi)((0,n.pi)({},r),{mutation:i}),u=e.client||p.current.client;p.current.result.loading||o.ignoreResults||!p.current.isMounted||g(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:u});var c=++p.current.mutationId,d=(0,a.J)(o,e);return u.mutate(d).then(function(t){var r,n,i=t.data,a=t.errors,o=a&&a.length>0?new l.cA({graphQLErrors:a}):void 0,m=e.onError||(null===(r=p.current.options)||void 0===r?void 0:r.onError);if(o&&m&&m(o,d),c===p.current.mutationId&&!d.ignoreResults){var h={called:!0,loading:!1,data:i,error:o,client:u};p.current.isMounted&&!(0,s.D)(p.current.result,h)&&g(p.current.result=h)}var x=e.onCompleted||(null===(n=p.current.options)||void 0===n?void 0:n.onCompleted);return o||null==x||x(t.data,d),t},function(t){if(c===p.current.mutationId&&p.current.isMounted){var r,n={loading:!1,error:t,data:void 0,called:!0,client:u};(0,s.D)(p.current.result,n)||g(p.current.result=n)}var i=e.onError||(null===(r=p.current.options)||void 0===r?void 0:r.onError);if(i)return i(t,d),{data:void 0,errors:t};throw t})},[]),v=i.useCallback(function(){if(p.current.isMounted){var e={called:!1,loading:!1,client:p.current.client};Object.assign(p.current,{mutationId:0,result:e}),g(e)}},[]);return i.useEffect(function(){var e=p.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[x,(0,n.pi)({reset:v},h)]}}};