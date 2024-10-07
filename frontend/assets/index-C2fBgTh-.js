import{G as rt,r as st,j as A,t as mt,c as it,R as P,g as wt,B as pt,i as Ft,s as At}from"./index-CkQ2Pt_J.js";function Vt(e){return rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"},child:[]},{tag:"path",attr:{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"},child:[]},{tag:"path",attr:{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"},child:[]},{tag:"line",attr:{x1:"2",x2:"22",y1:"2",y2:"22"},child:[]}]})(e)}function kt(e){return rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(e)}const Dt=({label:e,inputType:s,error:r,wrapperTailClass:n,...u},l)=>{const[y,g]=st.useState(!1),T=()=>{g(k=>!k)};return A.jsxs("div",{className:"flex w-full flex-col",children:[e&&A.jsx("label",{htmlFor:"password",className:"mb-[4px] font-medium text-caption capitalize text-black-100 dark:text-white",children:e}),A.jsx("div",{className:mt(it("relative h-[36px] rounded-[4px] border-2 px-[4px] duration-300",r?"border-red-200":"border-[rgba(2,106,162,0.5)] focus-within:border-sky-200 hover:border-sky-200"),n),children:s==="password"?A.jsxs(A.Fragment,{children:[A.jsx("input",{className:"h-full w-full border-none bg-[transparent] font-regular text-black-100 outline-none placeholder:font-regular placeholder:capitalize placeholder:text-gray-100 dark:text-white dark:placeholder:text-white",type:y?"text":"password",...u,ref:l}),A.jsx("button",{className:"absolute right-[6px] top-[50%] translate-y-[-50%]",type:"button",onClick:T,children:y?A.jsx(kt,{}):A.jsx(Vt,{})})]}):A.jsx("input",{className:"h-full w-full border-none bg-[transparent] font-regular text-black-100 outline-none placeholder:font-regular placeholder:capitalize placeholder:text-gray-100 dark:text-white dark:placeholder:text-white",...u,ref:l})}),r&&A.jsx("p",{className:"text-tag text-red-200",children:r})]})},$e=st.forwardRef(Dt);var ce=e=>e.type==="checkbox",ie=e=>e instanceof Date,O=e=>e==null;const at=e=>typeof e=="object";var V=e=>!O(e)&&!Array.isArray(e)&&at(e)&&!ie(e),Et=e=>V(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,St=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ct=(e,s)=>e.has(St(s)),Nt=e=>{const s=e.constructor&&e.constructor.prototype;return V(s)&&s.hasOwnProperty("isPrototypeOf")},Ne=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function I(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ne&&(e instanceof Blob||e instanceof FileList))&&(r||V(e)))if(s=r?[]:{},!r&&!Nt(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=I(e[n]));else return e;return s}var pe=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,d=(e,s,r)=>{if(!s||!V(e))return r;const n=pe(s.split(/[,[\].]+?/)).reduce((u,l)=>O(u)?u:u[l],e);return F(n)||n===e?F(e[s])?r:e[s]:n},W=e=>typeof e=="boolean",Te=e=>/^\w*$/.test(e),lt=e=>pe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,s,r)=>{let n=-1;const u=Te(s)?[s]:lt(s),l=u.length,y=l-1;for(;++n<l;){const g=u[n];let T=r;if(n!==y){const k=e[g];T=V(k)||Array.isArray(k)?k:isNaN(+u[n+1])?{}:[]}if(g==="__proto__")return;e[g]=T,e=e[g]}return e};const ze={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};P.createContext(null);var Tt=(e,s,r,n=!0)=>{const u={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const y=l;return s._proxyFormState[y]!==q.all&&(s._proxyFormState[y]=!n||q.all),e[y]}});return u},M=e=>V(e)&&!Object.keys(e).length,Lt=(e,s,r,n)=>{r(e);const{name:u,...l}=e;return M(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(y=>s[y]===q.all)},ve=e=>Array.isArray(e)?e:[e];function Ot(e){const s=P.useRef(e);s.current=e,P.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Mt=(e,s,r,n,u)=>H(e)?(n&&s.watch.add(e),d(r,e,u)):Array.isArray(e)?e.map(l=>(n&&s.watch.add(l),d(r,l))):(n&&(s.watchAll=!0),r),Rt=(e,s,r,n,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:u||!0}}:{},Ye=e=>({isOnSubmit:!e||e===q.onSubmit,isOnBlur:e===q.onBlur,isOnChange:e===q.onChange,isOnAll:e===q.all,isOnTouch:e===q.onTouched}),Ge=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const oe=(e,s,r,n)=>{for(const u of r||Object.keys(e)){const l=d(e,u);if(l){const{_f:y,...g}=l;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],u)&&!n)return!0;if(y.ref&&s(y.ref,y.name)&&!n)return!0;if(oe(g,s))break}else if(V(g)&&oe(g,s))break}}};var Ut=(e,s,r)=>{const n=ve(d(e,r));return w(n,"root",s[r]),w(e,r,n),e},Le=e=>e.type==="file",K=e=>typeof e=="function",be=e=>{if(!Ne)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},xe=e=>H(e),Oe=e=>e.type==="radio",_e=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var nt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Ke}return Ke};const Ze={isValid:!1,value:null};var ut=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Ze):Ze;function Je(e,s,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||W(e)&&!e)return{type:r,message:xe(e)?e:"",ref:s}}var se=e=>V(e)&&!_e(e)?e:{value:e,message:""},Xe=async(e,s,r,n,u)=>{const{ref:l,refs:y,required:g,maxLength:T,minLength:k,min:p,max:x,pattern:fe,validate:Q,name:R,valueAsNumber:Fe,mount:$,disabled:Z}=e._f,b=d(s,R);if(!$||Z)return{};const z=y?y[0]:l,Y=v=>{n&&z.reportValidity&&(z.setCustomValidity(W(v)?"":v||""),z.reportValidity())},D={},te=Oe(l),de=ce(l),X=te||de,re=(Fe||Le(l))&&F(l.value)&&F(b)||be(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,U=Rt.bind(null,R,r,D),ye=(v,_,E,L=G.maxLength,B=G.minLength)=>{const j=v?_:E;D[R]={type:v?L:B,message:j,ref:l,...U(v?L:B,j)}};if(u?!Array.isArray(b)||!b.length:g&&(!X&&(re||O(b))||W(b)&&!b||de&&!nt(y).isValid||te&&!ut(y).isValid)){const{value:v,message:_}=xe(g)?{value:!!g,message:g}:se(g);if(v&&(D[R]={type:G.required,message:_,ref:z,...U(G.required,_)},!r))return Y(_),D}if(!re&&(!O(p)||!O(x))){let v,_;const E=se(x),L=se(p);if(!O(b)&&!isNaN(b)){const B=l.valueAsNumber||b&&+b;O(E.value)||(v=B>E.value),O(L.value)||(_=B<L.value)}else{const B=l.valueAsDate||new Date(b),j=ne=>new Date(new Date().toDateString()+" "+ne),ae=l.type=="time",le=l.type=="week";H(E.value)&&b&&(v=ae?j(b)>j(E.value):le?b>E.value:B>new Date(E.value)),H(L.value)&&b&&(_=ae?j(b)<j(L.value):le?b<L.value:B<new Date(L.value))}if((v||_)&&(ye(!!v,E.message,L.message,G.max,G.min),!r))return Y(D[R].message),D}if((T||k)&&!re&&(H(b)||u&&Array.isArray(b))){const v=se(T),_=se(k),E=!O(v.value)&&b.length>+v.value,L=!O(_.value)&&b.length<+_.value;if((E||L)&&(ye(E,v.message,_.message),!r))return Y(D[R].message),D}if(fe&&!re&&H(b)){const{value:v,message:_}=se(fe);if(_e(v)&&!b.match(v)&&(D[R]={type:G.pattern,message:_,ref:l,...U(G.pattern,_)},!r))return Y(_),D}if(Q){if(K(Q)){const v=await Q(b,s),_=Je(v,z);if(_&&(D[R]={..._,...U(G.validate,_.message)},!r))return Y(_.message),D}else if(V(Q)){let v={};for(const _ in Q){if(!M(v)&&!r)break;const E=Je(await Q[_](b,s),z,_);E&&(v={...E,...U(_,E.message)},Y(E.message),r&&(D[R]=v))}if(!M(v)&&(D[R]={ref:z,...v},!r))return D}}return Y(!0),D};function jt(e,s){const r=s.slice(0,-1).length;let n=0;for(;n<r;)e=F(e)?n++:e[s[n++]];return e}function It(e){for(const s in e)if(e.hasOwnProperty(s)&&!F(e[s]))return!1;return!0}function S(e,s){const r=Array.isArray(s)?s:Te(s)?[s]:lt(s),n=r.length===1?e:jt(e,r),u=r.length-1,l=r[u];return n&&delete n[l],u!==0&&(V(n)&&M(n)||Array.isArray(n)&&It(n))&&S(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}},me=e=>O(e)||!at(e);function J(e,s){if(me(e)||me(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const r=Object.keys(e),n=Object.keys(s);if(r.length!==n.length)return!1;for(const u of r){const l=e[u];if(!n.includes(u))return!1;if(u!=="ref"){const y=s[u];if(ie(l)&&ie(y)||V(l)&&V(y)||Array.isArray(l)&&Array.isArray(y)?!J(l,y):l!==y)return!1}}return!0}var ot=e=>e.type==="select-multiple",Pt=e=>Oe(e)||ce(e),Se=e=>be(e)&&e.isConnected,ct=e=>{for(const s in e)if(K(e[s]))return!0;return!1};function we(e,s={}){const r=Array.isArray(e);if(V(e)||r)for(const n in e)Array.isArray(e[n])||V(e[n])&&!ct(e[n])?(s[n]=Array.isArray(e[n])?[]:{},we(e[n],s[n])):O(e[n])||(s[n]=!0);return s}function ft(e,s,r){const n=Array.isArray(e);if(V(e)||n)for(const u in e)Array.isArray(e[u])||V(e[u])&&!ct(e[u])?F(s)||me(r[u])?r[u]=Array.isArray(e[u])?we(e[u],[]):{...we(e[u])}:ft(e[u],O(s)?{}:s[u],r[u]):r[u]=!J(e[u],s[u]);return r}var he=(e,s)=>ft(e,s,we(s)),dt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:n})=>F(e)?e:s?e===""?NaN:e&&+e:r&&H(e)?new Date(e):n?n(e):e;function Ce(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Le(s)?s.files:Oe(s)?ut(e.refs).value:ot(s)?[...s.selectedOptions].map(({value:r})=>r):ce(s)?nt(e.refs).value:dt(F(s.value)?e.ref.value:s.value,e)}var Bt=(e,s,r,n)=>{const u={};for(const l of e){const y=d(s,l);y&&w(u,l,y._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:n}},ue=e=>F(e)?e:_e(e)?e.source:V(e)?_e(e.value)?e.value.source:e.value:e;const et="AsyncFunction";var qt=e=>(!e||!e.validate)&&!!(K(e.validate)&&e.validate.constructor.name===et||V(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===et)),Wt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function tt(e,s,r){const n=d(e,r);if(n||Te(r))return{error:n,name:r};const u=r.split(".");for(;u.length;){const l=u.join("."),y=d(s,l),g=d(e,l);if(y&&!Array.isArray(y)&&r!==l)return{name:r};if(g&&g.type)return{name:l,error:g};u.pop()}return{name:r}}var Ht=(e,s,r,n,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?n.isOnBlur:u.isOnBlur)?!e:(r?n.isOnChange:u.isOnChange)?e:!0,$t=(e,s)=>!pe(d(e,s)).length&&S(e,s);const zt={mode:q.onSubmit,reValidateMode:q.onChange,shouldFocusError:!0};function Yt(e={}){let s={...zt,...e},r={submitCount:0,isDirty:!1,isLoading:K(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},u=V(s.defaultValues)||V(s.values)?I(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:I(u),y={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,k=0;const p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ee(),array:Ee(),state:Ee()},fe=Ye(s.mode),Q=Ye(s.reValidateMode),R=s.criteriaMode===q.all,Fe=t=>i=>{clearTimeout(k),k=setTimeout(t,i)},$=async t=>{if(p.isValid||t){const i=s.resolver?M((await X()).errors):await U(n,!0);i!==r.isValid&&x.state.next({isValid:i})}},Z=(t,i)=>{(p.isValidating||p.validatingFields)&&((t||Array.from(g.mount)).forEach(a=>{a&&(i?w(r.validatingFields,a,i):S(r.validatingFields,a))}),x.state.next({validatingFields:r.validatingFields,isValidating:!M(r.validatingFields)}))},b=(t,i=[],a,f,c=!0,o=!0)=>{if(f&&a){if(y.action=!0,o&&Array.isArray(d(n,t))){const h=a(d(n,t),f.argA,f.argB);c&&w(n,t,h)}if(o&&Array.isArray(d(r.errors,t))){const h=a(d(r.errors,t),f.argA,f.argB);c&&w(r.errors,t,h),$t(r.errors,t)}if(p.touchedFields&&o&&Array.isArray(d(r.touchedFields,t))){const h=a(d(r.touchedFields,t),f.argA,f.argB);c&&w(r.touchedFields,t,h)}p.dirtyFields&&(r.dirtyFields=he(u,l)),x.state.next({name:t,isDirty:v(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(l,t,i)},z=(t,i)=>{w(r.errors,t,i),x.state.next({errors:r.errors})},Y=t=>{r.errors=t,x.state.next({errors:r.errors,isValid:!1})},D=(t,i,a,f)=>{const c=d(n,t);if(c){const o=d(l,t,F(a)?d(u,t):a);F(o)||f&&f.defaultChecked||i?w(l,t,i?o:Ce(c._f)):L(t,o),y.mount&&$()}},te=(t,i,a,f,c)=>{let o=!1,h=!1;const m={name:t},C=!!(d(n,t)&&d(n,t)._f&&d(n,t)._f.disabled);if(!a||f){p.isDirty&&(h=r.isDirty,r.isDirty=m.isDirty=v(),o=h!==m.isDirty);const N=C||J(d(u,t),i);h=!!(!C&&d(r.dirtyFields,t)),N||C?S(r.dirtyFields,t):w(r.dirtyFields,t,!0),m.dirtyFields=r.dirtyFields,o=o||p.dirtyFields&&h!==!N}if(a){const N=d(r.touchedFields,t);N||(w(r.touchedFields,t,a),m.touchedFields=r.touchedFields,o=o||p.touchedFields&&N!==a)}return o&&c&&x.state.next(m),o?m:{}},de=(t,i,a,f)=>{const c=d(r.errors,t),o=p.isValid&&W(i)&&r.isValid!==i;if(e.delayError&&a?(T=Fe(()=>z(t,a)),T(e.delayError)):(clearTimeout(k),T=null,a?w(r.errors,t,a):S(r.errors,t)),(a?!J(c,a):c)||!M(f)||o){const h={...f,...o&&W(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...h},x.state.next(h)}},X=async t=>{Z(t,!0);const i=await s.resolver(l,s.context,Bt(t||g.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return Z(t),i},re=async t=>{const{errors:i}=await X(t);if(t)for(const a of t){const f=d(i,a);f?w(r.errors,a,f):S(r.errors,a)}else r.errors=i;return i},U=async(t,i,a={valid:!0})=>{for(const f in t){const c=t[f];if(c){const{_f:o,...h}=c;if(o){const m=g.array.has(o.name),C=c._f&&qt(c._f);C&&p.validatingFields&&Z([f],!0);const N=await Xe(c,l,R,s.shouldUseNativeValidation&&!i,m);if(C&&p.validatingFields&&Z([f]),N[o.name]&&(a.valid=!1,i))break;!i&&(d(N,o.name)?m?Ut(r.errors,N,o.name):w(r.errors,o.name,N[o.name]):S(r.errors,o.name))}!M(h)&&await U(h,i,a)}}return a.valid},ye=()=>{for(const t of g.unMount){const i=d(n,t);i&&(i._f.refs?i._f.refs.every(a=>!Se(a)):!Se(i._f.ref))&&Ae(t)}g.unMount=new Set},v=(t,i)=>(t&&i&&w(l,t,i),!J(Me(),u)),_=(t,i,a)=>Mt(t,g,{...y.mount?l:F(i)?u:H(t)?{[t]:i}:i},a,i),E=t=>pe(d(y.mount?l:u,t,e.shouldUnregister?d(u,t,[]):[])),L=(t,i,a={})=>{const f=d(n,t);let c=i;if(f){const o=f._f;o&&(!o.disabled&&w(l,t,dt(i,o)),c=be(o.ref)&&O(i)?"":i,ot(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?ce(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(m=>m===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Le(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||x.values.next({name:t,values:{...l}})))}(a.shouldDirty||a.shouldTouch)&&te(t,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ne(t)},B=(t,i,a)=>{for(const f in i){const c=i[f],o=`${t}.${f}`,h=d(n,o);(g.array.has(t)||!me(c)||h&&!h._f)&&!ie(c)?B(o,c,a):L(o,c,a)}},j=(t,i,a={})=>{const f=d(n,t),c=g.array.has(t),o=I(i);w(l,t,o),c?(x.array.next({name:t,values:{...l}}),(p.isDirty||p.dirtyFields)&&a.shouldDirty&&x.state.next({name:t,dirtyFields:he(u,l),isDirty:v(t,o)})):f&&!f._f&&!O(o)?B(t,o,a):L(t,o,a),Ge(t,g)&&x.state.next({...r}),x.values.next({name:y.mount?t:void 0,values:{...l}})},ae=async t=>{y.mount=!0;const i=t.target;let a=i.name,f=!0;const c=d(n,a),o=()=>i.type?Ce(c._f):Et(t),h=m=>{f=Number.isNaN(m)||J(m,d(l,a,m))};if(c){let m,C;const N=o(),ee=t.type===ze.BLUR||t.type===ze.FOCUS_OUT,xt=!Wt(c._f)&&!s.resolver&&!d(r.errors,a)&&!c._f.deps||Ht(ee,d(r.touchedFields,a),r.isSubmitted,Q,fe),ke=Ge(a,g,ee);w(l,a,N),ee?(c._f.onBlur&&c._f.onBlur(t),T&&T(0)):c._f.onChange&&c._f.onChange(t);const De=te(a,N,ee,!1),bt=!M(De)||ke;if(!ee&&x.values.next({name:a,type:t.type,values:{...l}}),xt)return p.isValid&&(e.mode==="onBlur"?ee&&$():$()),bt&&x.state.next({name:a,...ke?{}:De});if(!ee&&ke&&x.state.next({...r}),s.resolver){const{errors:We}=await X([a]);if(h(N),f){const _t=tt(r.errors,n,a),He=tt(We,n,_t.name||a);m=He.error,a=He.name,C=M(We)}}else Z([a],!0),m=(await Xe(c,l,R,s.shouldUseNativeValidation))[a],Z([a]),h(N),f&&(m?C=!1:p.isValid&&(C=await U(n,!0)));f&&(c._f.deps&&ne(c._f.deps),de(a,C,m,De))}},le=(t,i)=>{if(d(r.errors,i)&&t.focus)return t.focus(),1},ne=async(t,i={})=>{let a,f;const c=ve(t);if(s.resolver){const o=await re(F(t)?t:c);a=M(o),f=t?!c.some(h=>d(o,h)):a}else t?(f=(await Promise.all(c.map(async o=>{const h=d(n,o);return await U(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!f&&!r.isValid)&&$()):f=a=await U(n);return x.state.next({...!H(t)||p.isValid&&a!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:a}:{},errors:r.errors}),i.shouldFocus&&!f&&oe(n,le,t?c:g.mount),f},Me=t=>{const i={...y.mount?l:u};return F(t)?i:H(t)?d(i,t):t.map(a=>d(i,a))},Re=(t,i)=>({invalid:!!d((i||r).errors,t),isDirty:!!d((i||r).dirtyFields,t),error:d((i||r).errors,t),isValidating:!!d(r.validatingFields,t),isTouched:!!d((i||r).touchedFields,t)}),yt=t=>{t&&ve(t).forEach(i=>S(r.errors,i)),x.state.next({errors:t?r.errors:{}})},Ue=(t,i,a)=>{const f=(d(n,t,{_f:{}})._f||{}).ref,c=d(r.errors,t)||{},{ref:o,message:h,type:m,...C}=c;w(r.errors,t,{...C,...i,ref:f}),x.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&f&&f.focus&&f.focus()},ht=(t,i)=>K(t)?x.values.subscribe({next:a=>t(_(void 0,i),a)}):_(t,i,!0),Ae=(t,i={})=>{for(const a of t?ve(t):g.mount)g.mount.delete(a),g.array.delete(a),i.keepValue||(S(n,a),S(l,a)),!i.keepError&&S(r.errors,a),!i.keepDirty&&S(r.dirtyFields,a),!i.keepTouched&&S(r.touchedFields,a),!i.keepIsValidating&&S(r.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&S(u,a);x.values.next({values:{...l}}),x.state.next({...r,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&$()},je=({disabled:t,name:i,field:a,fields:f,value:c})=>{if(W(t)&&y.mount||t){const o=t?void 0:F(c)?Ce(a?a._f:d(f,i)._f):c;w(l,i,o),te(i,o,!1,!1,!0)}},Ve=(t,i={})=>{let a=d(n,t);const f=W(i.disabled)||W(e.disabled);return w(n,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...i}}),g.mount.add(t),a?je({field:a,disabled:W(i.disabled)?i.disabled:e.disabled,name:t,value:i.value}):D(t,!0,i.value),{...f?{disabled:i.disabled||e.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:t,onChange:ae,onBlur:ae,ref:c=>{if(c){Ve(t,i),a=d(n,t);const o=F(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Pt(o),m=a._f.refs||[];if(h?m.find(C=>C===o):o===a._f.ref)return;w(n,t,{_f:{...a._f,...h?{refs:[...m.filter(Se),o,...Array.isArray(d(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),D(t,!1,void 0,o)}else a=d(n,t,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(Ct(g.array,t)&&y.action)&&g.unMount.add(t)}}},Ie=()=>s.shouldFocusError&&oe(n,le,g.mount),gt=t=>{W(t)&&(x.state.next({disabled:t}),oe(n,(i,a)=>{const f=d(n,a);f&&(i.disabled=f._f.disabled||t,Array.isArray(f._f.refs)&&f._f.refs.forEach(c=>{c.disabled=f._f.disabled||t}))},0,!1))},Pe=(t,i)=>async a=>{let f;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let c=I(l);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await X();r.errors=o,c=h}else await U(n);if(S(r.errors,"root"),M(r.errors)){x.state.next({errors:{}});try{await t(c,a)}catch(o){f=o}}else i&&await i({...r.errors},a),Ie(),setTimeout(Ie);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},vt=(t,i={})=>{d(n,t)&&(F(i.defaultValue)?j(t,I(d(u,t))):(j(t,i.defaultValue),w(u,t,I(i.defaultValue))),i.keepTouched||S(r.touchedFields,t),i.keepDirty||(S(r.dirtyFields,t),r.isDirty=i.defaultValue?v(t,I(d(u,t))):v()),i.keepError||(S(r.errors,t),p.isValid&&$()),x.state.next({...r}))},Be=(t,i={})=>{const a=t?I(t):u,f=I(a),c=M(t),o=c?u:f;if(i.keepDefaultValues||(u=a),!i.keepValues){if(i.keepDirtyValues)for(const h of g.mount)d(r.dirtyFields,h)?w(o,h,d(l,h)):j(h,d(o,h));else{if(Ne&&F(t))for(const h of g.mount){const m=d(n,h);if(m&&m._f){const C=Array.isArray(m._f.refs)?m._f.refs[0]:m._f.ref;if(be(C)){const N=C.closest("form");if(N){N.reset();break}}}}n={}}l=e.shouldUnregister?i.keepDefaultValues?I(u):{}:I(o),x.array.next({values:{...o}}),x.values.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!p.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:c?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!J(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&l?he(u,l):r.dirtyFields:i.keepDefaultValues&&t?he(u,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},qe=(t,i)=>Be(K(t)?t(l):t,i);return{control:{register:Ve,unregister:Ae,getFieldState:Re,handleSubmit:Pe,setError:Ue,_executeSchema:X,_getWatch:_,_getDirty:v,_updateValid:$,_removeUnmounted:ye,_updateFieldArray:b,_updateDisabledField:je,_getFieldArray:E,_reset:Be,_resetDefaultValues:()=>K(s.defaultValues)&&s.defaultValues().then(t=>{qe(t,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:gt,_subjects:x,_proxyFormState:p,_setErrors:Y,get _fields(){return n},get _formValues(){return l},get _state(){return y},set _state(t){y=t},get _defaultValues(){return u},get _names(){return g},set _names(t){g=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ne,register:Ve,handleSubmit:Pe,watch:ht,setValue:j,getValues:Me,reset:qe,resetField:vt,clearErrors:yt,unregister:Ae,setError:Ue,setFocus:(t,i={})=>{const a=d(n,t),f=a&&a._f;if(f){const c=f.refs?f.refs[0]:f.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Re}}function Gt(e={}){const s=P.useRef(),r=P.useRef(),[n,u]=P.useState({isDirty:!1,isValidating:!1,isLoading:K(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:K(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Yt(e),formState:n});const l=s.current.control;return l._options=e,Ot({subject:l._subjects.state,next:y=>{Lt(y,l._proxyFormState,l._updateFormState)&&u({...l._formState})}}),P.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),P.useEffect(()=>{if(l._proxyFormState.isDirty){const y=l._getDirty();y!==n.isDirty&&l._subjects.state.next({isDirty:y})}},[l,n.isDirty]),P.useEffect(()=>{e.values&&!J(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,u(y=>({...y}))):l._resetDefaultValues()},[e.values,l]),P.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),P.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),P.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=Tt(n,l),s.current}const ge={required:{message:"Please fill in this field"},email:{message:"Wrong email format",validateRe:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}},Xt=({tailClasses:e})=>{var g,T;const s=wt(),{register:r,handleSubmit:n,formState:{errors:u},reset:l}=Gt(),y=k=>{const p={email:k==null?void 0:k.contact,question:k==null?void 0:k.question};s(Ft(p)),At.success("Thank you for connecting, I will response soon!"),l()};return A.jsxs("div",{className:it("flex flex-col items-center justify-center",e),children:[A.jsx("p",{className:"text-center font-semibold text-purple-300",children:"Contact"}),A.jsx("h2",{className:"mb-[24px] mt-[12px] text-center font-semibold text-h1-sm text-black-100 dark:text-white",children:"Contact me"}),A.jsx("p",{className:"text-center text-body-big dark:text-white",children:"I’d love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out."}),A.jsx("form",{className:"mt-[40px]",action:"#",method:"POST",onSubmit:n(y),children:A.jsxs("div",{className:"flex flex-col items-start justify-center gap-[16px] tablet:flex-row tablet:items-end",children:[A.jsx($e,{...r("contact",{required:ge.required.message,pattern:{value:ge.email.validateRe,message:ge.email.message}}),label:"Contact Email",error:(g=u==null?void 0:u.contact)==null?void 0:g.message,wrapperTailClass:"h-[48px] rounded-[8px] border-blue-light-300 px-[16px] py-[12px] w-full min-w-[320px]",placeholder:"Your email here..."}),A.jsx($e,{...r("question",{required:ge.required.message}),error:(T=u==null?void 0:u.question)==null?void 0:T.message,label:"Your Question",wrapperTailClass:"h-[48px] rounded-[8px] border-blue-light-300 px-[16px] py-[12px] w-full min-w-[320px]",placeholder:"Make question concise..."}),A.jsx(pt,{type:"submit",tailClasses:"h-[48px] px-[20px] rounded-[8px] bg-purple-300 hover:bg-purple-200",children:"Contact"})]})})]})};export{Xt as C};
