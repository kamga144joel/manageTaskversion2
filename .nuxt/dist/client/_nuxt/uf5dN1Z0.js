import{r as n,k as T,l as A,y as D,c as r,a as e,q as m,p as $,m as y,s as g,n as f,t as o,F as q,z as E,o as l,A as S}from"./CcQe4kPX.js";import{g as w}from"./MnJuaCIP.js";const U={class:"container mx-auto px-4 py-8"},j={class:"bg-white rounded-lg shadow-md p-6 mb-8"},M={class:"space-y-4"},V={key:0,class:"mt-4 text-blue-500"},C={key:1,class:"mt-4 text-red-500"},F={class:"bg-white rounded-lg shadow-md p-6"},B={key:0,class:"text-center py-4"},G={key:1,class:"text-center py-4"},I={class:"text-red-600"},L={key:2,class:"text-center py-4"},N={key:3,class:"overflow-x-auto"},P={class:"min-w-full divide-y divide-gray-200"},z={class:"bg-white divide-y divide-gray-200"},H={class:"px-6 py-4 whitespace-nowrap"},O={class:"px-6 py-4 whitespace-nowrap"},Z={class:"px-6 py-4 whitespace-nowrap"},J={class:"px-6 py-4 whitespace-nowrap"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"px-6 py-4 whitespace-nowrap"},Y={__name:"tache",setup(R){const i=n(""),d=n(""),u=n("");w`
  query GetTaches {
    taches {
      id
      title
      description
      completed
      owner {
        id
        name
        username
        email
      }
    }
  }
`;const b=w`
  mutation AddTache($title: String!, $description: String!, $owner: String!) {
    addTache(
      title: $title,
      description: $description,
      owner: $owner,
      completed: false
    ) {
      id
      title
      description
      completed
      owner {
        id
        name
        username
        email
      }
    }
  }
`,{mutate:h,loading:_,error:p}=T(b),c=n([]),v=n(!0),x=n(null);A(async()=>{try{const{data:a}=await D("/api/taches","$pTHGFIcxZ1");c.value=a.value.taches||[]}catch(a){x.value=a}finally{v.value=!1}});const k=async()=>{if(!(!i.value||!d.value||!u.value))try{await h({title:i.value,description:d.value,owner:u.value}),i.value="",d.value="",u.value=""}catch(a){console.error("Erreur lors de l'ajout de la tâche:",a),p.value=a}};return(a,t)=>(l(),r("div",U,[t[12]||(t[12]=e("h1",{class:"text-2xl font-bold text-red-600 underline text-center mb-8"},"Gestion des tâches",-1)),e("div",j,[t[7]||(t[7]=e("h2",{class:"text-xl font-semibold mb-4"},"Ajouter une tâche",-1)),e("form",{onSubmit:$(k,["prevent"])},[e("div",M,[e("div",null,[t[3]||(t[3]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Titre:",-1)),y(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s),type:"text",placeholder:"Titre",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600",required:""},null,512),[[g,i.value]])]),e("div",null,[t[4]||(t[4]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Description:",-1)),y(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>d.value=s),type:"text",placeholder:"Description",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600",required:""},null,512),[[g,d.value]])]),e("div",null,[t[5]||(t[5]=e("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Propriétaire:",-1)),y(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>u.value=s),type:"text",placeholder:"Propriétaire",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600",required:""},null,512),[[g,u.value]])]),t[6]||(t[6]=e("div",{class:"flex justify-end"},[e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Ajouter ")],-1))])],32),f(_)?(l(),r("p",V,"Ajout en cours...")):m("",!0),f(p)?(l(),r("p",C,"Une erreur s'est produite : "+o(f(p).message),1)):m("",!0)]),e("div",F,[t[11]||(t[11]=e("h2",{class:"text-xl font-semibold mb-4"},"Liste des tâches",-1)),v.value?(l(),r("div",B,t[8]||(t[8]=[e("p",{class:"text-yellow-600"},"Chargement en cours...",-1)]))):x.value?(l(),r("div",G,[e("p",I,"Une erreur s'est produite : "+o(x.value.message),1)])):m("",!0),c.value.length===0?(l(),r("div",L,t[9]||(t[9]=[e("p",null,"Aucune tâche trouvée.",-1)]))):(l(),r("div",N,[e("table",P,[t[10]||(t[10]=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Propriétaire"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Tâche"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Description"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"ID"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Statut"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Email")])],-1)),e("tbody",z,[(l(!0),r(q,null,E(c.value,s=>(l(),r("tr",{key:s.id},[e("td",H,o(s.owner.name)+" "+o(s.owner.username),1),e("td",O,o(s.title),1),e("td",Z,o(s.description),1),e("td",J,o(s.id),1),e("td",K,[e("span",{class:S(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.completed?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"])},o(s.completed?"Terminée":"En cours"),3)]),e("td",Q,o(s.owner.email),1)]))),128))])])]))])]))}};export{Y as default};
