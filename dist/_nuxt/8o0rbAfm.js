import{r as g,k as C,z as $,A as q,c as s,a as e,q as x,p as E,m,s as p,n,t as c,F as S,B as j,o as l}from"./CXUvlOiD.js";import{g as f}from"./B3lSGDB-.js";const N={class:"container mx-auto px-4 py-8"},D={class:"bg-white rounded-lg shadow-md p-6 mb-8"},G={class:"space-y-4"},O={key:0,class:"mt-4 text-blue-500"},T={key:1,class:"mt-4 text-red-500"},B={class:"bg-white rounded-lg shadow-md p-6"},M={key:0,class:"text-center py-4"},R={key:1,class:"text-center py-4"},F={class:"text-red-600"},Q={key:2,class:"text-center py-4"},z={key:3,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},I={class:"flex items-center gap-4"},V=["src","alt"],Y={class:"font-semibold"},H={class:"text-sm text-gray-600"},J={class:"text-sm text-gray-500"},X={__name:"logos",setup(K){const a=g(""),i=g(""),d=g(""),u=g(""),_=f`
  query GetLogos {
    logos {
      id
      name
      url
      description
      category
    }
  }
`,k=f`
  mutation CreateLogo($name: String!, $url: String!, $description: String!, $category: String!) {
    createLogo(
      name: $name,
      url: $url,
      description: $description,
      category: $category
    ) {
      id
      name
      url
      description
      category
    }
  }
`,{mutate:L,loading:h,error:y}=C(k),v=g([]),{result:U,loading:w,error:b}=$(_);q(U,r=>{r!=null&&r.logos&&(v.value=r.logos)});const A=async()=>{if(!(!a.value||!i.value||!d.value||!u.value))try{await L({name:a.value,url:i.value,description:d.value,category:u.value}),a.value="",i.value="",d.value="",u.value=""}catch(r){console.error("Erreur lors de l'ajout du logo:",r),y.value=r}};return(r,t)=>(l(),s("div",N,[t[13]||(t[13]=e("h1",{class:"text-2xl font-bold text-red-600 underline text-center mb-8"},"Gestion des logos",-1)),e("div",D,[t[9]||(t[9]=e("h2",{class:"text-xl font-semibold mb-4"},"Ajouter un logo",-1)),e("form",{onSubmit:E(A,["prevent"])},[e("div",G,[e("div",null,[t[4]||(t[4]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Nom:",-1)),m(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),type:"text",placeholder:"Nom du logo",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600",required:""},null,512),[[p,a.value]])]),e("div",null,[t[5]||(t[5]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"URL:",-1)),m(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>i.value=o),type:"text",placeholder:"URL de l'image",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600",required:""},null,512),[[p,i.value]])]),e("div",null,[t[6]||(t[6]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Description:",-1)),m(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>d.value=o),type:"text",placeholder:"Description",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600",required:""},null,512),[[p,d.value]])]),e("div",null,[t[7]||(t[7]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Catégorie:",-1)),m(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>u.value=o),type:"text",placeholder:"Catégorie",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600",required:""},null,512),[[p,u.value]])]),t[8]||(t[8]=e("div",{class:"flex justify-end"},[e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Ajouter ")],-1))])],32),n(h)?(l(),s("p",O,"Ajout en cours...")):x("",!0),n(y)?(l(),s("p",T,"Une erreur s'est produite : "+c(n(y).message),1)):x("",!0)]),e("div",B,[t[12]||(t[12]=e("h2",{class:"text-xl font-semibold mb-4"},"Liste des logos",-1)),n(w)?(l(),s("div",M,t[10]||(t[10]=[e("p",{class:"text-yellow-600"},"Chargement en cours...",-1)]))):n(b)?(l(),s("div",R,[e("p",F,"Une erreur s'est produite : "+c(n(b).message),1)])):x("",!0),v.value.length===0?(l(),s("div",Q,t[11]||(t[11]=[e("p",null,"Aucun logo trouvé.",-1)]))):(l(),s("div",z,[(l(!0),s(S,null,j(v.value,o=>(l(),s("div",{key:o.id,class:"bg-gray-50 rounded-lg p-4"},[e("div",I,[e("img",{src:o.url,alt:o.name,class:"w-16 h-16 object-contain"},null,8,V),e("div",null,[e("h3",Y,c(o.name),1),e("p",H,c(o.description),1),e("p",J,"Catégorie: "+c(o.category),1)])])]))),128))]))])]))}};export{X as default};
