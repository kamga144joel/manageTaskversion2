import{l as G,j as M,r as d,k as T,c,a as o,d as k,n as I,p as j,q as N,m as U,s as S,t as V,g as B,o as m,y as L}from"./CXUvlOiD.js";import{g as E}from"./B3lSGDB-.js";const _={class:"min-h-screen flex flex-col md:flex-row items-center justify-center dark:bg-yellow-900 bg-gray-900 rounded-lg"},z={class:"bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-md"},O={key:0,class:"text-center text-gray-500"},P=["disabled"],R={key:0,class:"text-red-600 text-center mt-2"},J={__name:"login",setup(K){B();const g=M();G(()=>{const e=new URLSearchParams(window.location.search).get("token");e&&(localStorage.setItem("auth_token",e),g.push("/infolink"))});const a=d(""),l=d(""),n=d(null),r=d(null),D=E`
  mutation Login($email: String!, $password: String!) {
    loginUser(input: {
      email: $email,
      password: $password
    }) {
      user {
        id      # Assurez-vous que l'ID est bien retourné par la mutation
        token
      }
    }
  }
`,{mutate:$,loading:w,error:q}=T(D),A=()=>{window.location.href="https://localhost:8000/auth/google"},C=async()=>{var i,e,s,v,b,f,y,x;if(n.value=null,r.value=null,!a.value||!l.value){n.value="Veuillez remplir tous les champs.";return}try{const t=await $({email:a.value,password:l.value}),h=(s=(e=(i=t==null?void 0:t.data)==null?void 0:i.loginUser)==null?void 0:e.user)==null?void 0:s.token,p=(f=(b=(v=t==null?void 0:t.data)==null?void 0:v.loginUser)==null?void 0:b.user)==null?void 0:f.id;if(!h)throw new Error("Token non reçu depuis le serveur.");if(!p)throw new Error("User ID non reçu depuis le serveur après la connexion.");localStorage.setItem("auth_token",h);const u=await L().client.query({query:E`
        query GetUserById($id: ID!) { # 1. Déclare la variable $id de type ID! (requis)
          user(id: $id) {            # 2. Utilise la variable $id comme argument 'id'
            id
            email
            username
            name
            # Ajoutez d'autres champs si nécessaire
          }
        }
      `,variables:{id:p},fetchPolicy:"network-only"});(y=u==null?void 0:u.data)!=null&&y.user?console.log("Utilisateur connecté :",u.data.user):console.warn("Impossible de récupérer les détails de l'utilisateur avec l'ID:",p),await g.push("/infolink")}catch(t){console.error("Erreur de connexion :",t),r.value=((x=q.value)==null?void 0:x.message)||t.message||"Une erreur inconnue est survenue."}};return(i,e)=>(m(),c("div",_,[o("div",z,[e[5]||(e[5]=o("h1",{class:"underline font-bold text-center mb-4 text-green-900"}," Bienvenue sur le de Gestion des Tâches ",-1)),e[6]||(e[6]=o("h2",{class:"text-center text-gray-700 mb-6"}," Connectez-vous pour bénéficier de nos services ",-1)),e[7]||(e[7]=o("h2",{class:"bg-red-700"},[k("je n'est pas de conte MANAGETASKS"),o("a")],-1)),I(w)?(m(),c("p",O,"Connexion en cours...")):(m(),c("form",{key:1,onSubmit:j(C,["prevent"]),class:"space-y-4"},[o("div",null,[e[2]||(e[2]=o("label",{for:"email",class:"block text-gray-700 mb-1"},"Email",-1)),U(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.value=s),type:"email",id:"email",name:"email",placeholder:"exemple@mail.com",autocomplete:"email",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"},null,512),[[S,a.value]])]),o("div",null,[e[3]||(e[3]=o("label",{for:"password",class:"block text-gray-700 mb-1"},"Mot de passe",-1)),U(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>l.value=s),type:"password",id:"password",name:"password",placeholder:"********",autocomplete:"current-password",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"},null,512),[[S,l.value]])]),o("button",{type:"submit",disabled:I(w),class:"w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition disabled:opacity-50"}," Se connecter ",8,P),o("button",{type:"button",class:"w-full bg-white border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center mt-2 hover:bg-gray-50",onClick:A},e[4]||(e[4]=[o("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google",class:"w-5 h-5 mr-2"},null,-1),k(" Se connecter avec Google ")])),r.value||n.value?(m(),c("p",R,V(r.value?r.value.message:n.value),1)):N("",!0)],32))])]))}};export{J as default};
