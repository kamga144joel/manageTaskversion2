import{_ as $,C as T,o as l,w as n,D as B,T as C,r as x,k as U,z as q,A as j,l as M,c as p,b as r,a as e,p as Y,m as _,s as h,q as N,n as w,t as m,F as G,B as P,E as z}from"./CXUvlOiD.js";import{g as A}from"./B3lSGDB-.js";const F={__name:"AnimatedTransition",props:{transitionName:{type:String,default:"fade"}},setup(k){const d=s=>{s.style.opacity="0",s.style.transform="translateY(20px)"},u=(s,f)=>{setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)",f()},100)},c=s=>{s.style.transition="all 0.3s ease"},g=s=>{s.style.opacity="1",s.style.transform="translateY(0)"},y=(s,f)=>{setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-20px)",f()},100)},v=s=>{s.style.transition="all 0.3s ease"};return(s,f)=>(l(),T(C,{name:k.transitionName,mode:"out-in",onBeforeEnter:d,onEnter:u,onAfterEnter:c,onBeforeLeave:g,onLeave:y,onAfterLeave:v},{default:n(()=>[B(s.$slots,"default",{},void 0,!0)]),_:3},8,["name"]))}},o=$(F,[["__scopeId","data-v-82515d94"]]),H={class:"container mx-auto px-4 py-8"},I={class:"bg-white rounded-lg shadow-md p-6 mb-8"},Q={class:"space-y-4"},O={key:0,class:"mt-4 text-blue-500"},R={key:0,class:"mt-4 text-red-500"},V={class:"bg-white rounded-lg shadow-md p-6"},J={class:"text-center py-4"},K={key:0,class:"text-center py-4"},W={key:1,class:"text-center py-4"},X={class:"text-red-500"},Z={key:2,class:"text-center py-4"},ee={class:"overflow-x-auto"},te={class:"min-w-full divide-y divide-gray-200"},se={class:"bg-white divide-y divide-gray-200"},ae={class:"transition-all duration-200 hover:bg-gray-50"},ne={class:"px-6 py-4 whitespace-nowrap"},oe={class:"px-6 py-4 whitespace-nowrap"},re={class:"px-6 py-4 whitespace-nowrap"},le={class:"px-6 py-4 whitespace-nowrap"},ue={__name:"tache",setup(k){const d=x(""),u=x(""),c=x(""),g=x(!1),y=x(null),v=x([]),s=A`
  query GetTaches {
    taches {
      collection {
        title
        description
        completed
        owner {
          name
          username
          email
        }
      }
    }
  }
`,f=A`
  mutation CreateTache($title: String!, $description: String!, $owner: String!) {
    createTache(
      title: $title,
      description: $description,
      owner: $owner,
      completed: false
    ) {
      title
      description
      completed
      owner {
        name
        username
        email
      }
    }
  }
`,{mutate:E,loading:S,error:b}=U(f),{result:D}=q(s);j(D,i=>{var t;(t=i==null?void 0:i.taches)!=null&&t.collection&&(v.value=i.taches.collection)}),M(()=>{g.value=!0,y.value=null});const L=async()=>{if(!(!d.value||!u.value||!c.value))try{await E({title:d.value,description:u.value,owner:c.value}),d.value="",u.value="",c.value=""}catch(i){console.error("Erreur lors de l'ajout de la tâche:",i),b.value=i}};return(i,t)=>(l(),p("div",H,[r(o,{transitionName:"fade"},{default:n(()=>t[3]||(t[3]=[e("h1",{class:"text-2xl font-bold text-red-600 underline text-center mb-8"},"Gestion des tâches",-1)])),_:1}),r(o,{transitionName:"slide"},{default:n(()=>[e("div",I,[t[8]||(t[8]=e("h2",{class:"text-xl font-semibold mb-4"},"Ajouter une tâche",-1)),e("form",{onSubmit:Y(L,["prevent"])},[e("div",Q,[e("div",null,[t[4]||(t[4]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Titre:",-1)),_(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>d.value=a),type:"text",placeholder:"Titre",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200",required:""},null,512),[[h,d.value]])]),e("div",null,[t[5]||(t[5]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Description:",-1)),_(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>u.value=a),type:"text",placeholder:"Description",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200",required:""},null,512),[[h,u.value]])]),e("div",null,[t[6]||(t[6]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Propriétaire:",-1)),_(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>c.value=a),type:"text",placeholder:"Propriétaire",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200",required:""},null,512),[[h,c.value]])]),t[7]||(t[7]=e("div",{class:"flex justify-end"},[e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"}," Ajouter ")],-1))])],32),r(o,{transitionName:"fade"},{default:n(()=>[w(S)?(l(),p("p",O,"Ajout en cours...")):N("",!0)]),_:1}),r(o,{transitionName:"fade"},{default:n(()=>[w(b)?(l(),p("p",R,"Une erreur s'est produite : "+m(w(b).message),1)):N("",!0)]),_:1})])]),_:1}),r(o,{transitionName:"slide"},{default:n(()=>[e("div",V,[t[12]||(t[12]=e("h2",{class:"text-xl font-semibold mb-4"},"Liste des tâches",-1)),e("div",J,[r(o,{transitionName:"fade"},{default:n(()=>[g.value?(l(),p("div",K,t[9]||(t[9]=[e("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"},null,-1)]))):y.value?(l(),p("div",W,[e("p",X,"Une erreur s'est produite : "+m(y.value.message),1)])):v.value.length===0?(l(),p("div",Z,t[10]||(t[10]=[e("p",{class:"text-gray-500"},"Aucune tâche trouvée.",-1)]))):(l(),T(o,{key:3,transitionName:"slide"},{default:n(()=>[e("div",ee,[e("table",te,[t[11]||(t[11]=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Propriétaire"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Tâche"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Description"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Statut")])],-1)),e("tbody",se,[(l(!0),p(G,null,P(v.value,a=>(l(),T(o,{transitionName:"slide",key:a.title},{default:n(()=>[e("tr",ae,[e("td",ne,[r(o,{transitionName:"fade"},{default:n(()=>[e("span",null,m(a.owner.name)+" "+m(a.owner.username),1)]),_:2},1024)]),e("td",oe,[r(o,{transitionName:"fade"},{default:n(()=>[e("span",null,m(a.title),1)]),_:2},1024)]),e("td",re,[r(o,{transitionName:"fade"},{default:n(()=>[e("span",null,m(a.description),1)]),_:2},1024)]),e("td",le,[r(o,{transitionName:"fade"},{default:n(()=>[e("span",{class:z(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full transition-all duration-200",a.completed?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"])},m(a.completed?"Terminée":"En cours"),3)]),_:2},1024)])])]),_:2},1024))),128))])])])]),_:1}))]),_:1})])])]),_:1})]))}};export{ue as default};
