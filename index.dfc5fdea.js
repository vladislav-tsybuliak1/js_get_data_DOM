var e=document.querySelector(".total-population"),r=document.querySelector(".average-population"),t=0,n=0,o=!0,l=!1,a=void 0;try{for(var u,i=document.querySelectorAll(".population")[Symbol.iterator]();!(o=(u=i.next()).done);o=!0){var c=u.value;t+=+c.innerText.replaceAll(",",""),n+=1}}catch(e){l=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(l)throw a}}var m=Math.round(t/n),y=new Intl.NumberFormat("en-US");e.innerText=y.format(t),r.innerText=y.format(m);
//# sourceMappingURL=index.dfc5fdea.js.map
