Search.setIndex({docnames:["caching","changelog","defs","filtering","index","inheritance","namespaces","runtime","syntax","unicode","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["caching.rst","changelog.rst","defs.rst","filtering.rst","index.rst","inheritance.rst","namespaces.rst","runtime.rst","syntax.rst","unicode.rst","usage.rst"],objects:{"mako.cache":[[0,0,1,"","Cache"],[0,0,1,"","CacheImpl"],[0,4,1,"","register_plugin"]],"mako.cache.Cache":[[0,1,1,"","get"],[0,1,1,"","get_or_create"],[0,3,1,"","id"],[0,3,1,"","impl"],[0,1,1,"","invalidate"],[0,1,1,"","invalidate_body"],[0,1,1,"","invalidate_closure"],[0,1,1,"","invalidate_def"],[0,1,1,"","put"],[0,1,1,"","set"],[0,3,1,"","starttime"]],"mako.cache.Cache.get.params":[[0,2,1,"","**kw"],[0,2,1,"","key"]],"mako.cache.Cache.invalidate.params":[[0,2,1,"","**kw"],[0,2,1,"","key"]],"mako.cache.Cache.set.params":[[0,2,1,"","**kw"],[0,2,1,"","key"],[0,2,1,"","value"]],"mako.cache.CacheImpl":[[0,1,1,"","get"],[0,1,1,"","get_or_create"],[0,1,1,"","invalidate"],[0,3,1,"","pass_context"],[0,1,1,"","set"]],"mako.cache.CacheImpl.get.params":[[0,2,1,"","**kw"],[0,2,1,"","key"]],"mako.cache.CacheImpl.get_or_create.params":[[0,2,1,"","**kw"],[0,2,1,"","creation_function"],[0,2,1,"","key"]],"mako.cache.CacheImpl.invalidate.params":[[0,2,1,"","**kw"],[0,2,1,"","key"]],"mako.cache.CacheImpl.set.params":[[0,2,1,"","**kw"],[0,2,1,"","key"],[0,2,1,"","value"]],"mako.exceptions":[[10,0,1,"","RichTraceback"],[10,4,1,"","html_error_template"],[10,4,1,"","text_error_template"]],"mako.exceptions.RichTraceback":[[10,3,1,"","error"],[10,3,1,"","lineno"],[10,3,1,"","message"],[10,3,1,"","records"],[10,3,1,"","reverse_records"],[10,3,1,"","reverse_traceback"],[10,3,1,"","source"]],"mako.ext.beaker_cache":[[0,0,1,"","BeakerCacheImpl"]],"mako.ext.beaker_cache.BeakerCacheImpl":[[0,1,1,"","get"],[0,1,1,"","get_or_create"],[0,1,1,"","invalidate"]],"mako.ext.beaker_cache.BeakerCacheImpl.get.params":[[0,2,1,"","**kw"],[0,2,1,"","key"]],"mako.ext.beaker_cache.BeakerCacheImpl.get_or_create.params":[[0,2,1,"","**kw"],[0,2,1,"","creation_function"],[0,2,1,"","key"]],"mako.ext.beaker_cache.BeakerCacheImpl.invalidate.params":[[0,2,1,"","**kw"],[0,2,1,"","key"]],"mako.lookup":[[10,0,1,"","TemplateCollection"],[10,0,1,"","TemplateLookup"]],"mako.lookup.TemplateCollection":[[10,1,1,"","adjust_uri"],[10,1,1,"","filename_to_uri"],[10,1,1,"","get_template"],[10,1,1,"","has_template"]],"mako.lookup.TemplateCollection.get_template.params":[[10,2,1,"","relativeto"],[10,2,1,"","uri"]],"mako.lookup.TemplateCollection.has_template.params":[[10,2,1,"","uri"]],"mako.lookup.TemplateLookup":[[10,1,1,"","adjust_uri"],[10,1,1,"","filename_to_uri"],[10,1,1,"","get_template"],[10,1,1,"","put_string"],[10,1,1,"","put_template"]],"mako.lookup.TemplateLookup.params":[[10,2,1,"","collection_size"],[10,2,1,"","directories"],[10,2,1,"","filesystem_checks"],[10,2,1,"","modulename_callable"]],"mako.runtime":[[7,0,1,"","Context"],[7,0,1,"","LoopContext"],[6,0,1,"","ModuleNamespace"],[6,0,1,"","Namespace"],[6,0,1,"","TemplateNamespace"],[7,0,1,"","Undefined"],[6,4,1,"","capture"],[6,4,1,"","supports_caller"]],"mako.runtime.Context":[[7,1,1,"","get"],[7,1,1,"","keys"],[7,3,1,"","kwargs"],[7,3,1,"","lookup"],[7,1,1,"","pop_caller"],[7,1,1,"","push_caller"],[7,1,1,"","write"],[7,1,1,"","writer"]],"mako.runtime.LoopContext":[[7,1,1,"","cycle"]],"mako.runtime.ModuleNamespace":[[6,3,1,"","filename"]],"mako.runtime.Namespace":[[6,3,1,"","attr"],[6,3,1,"","cache"],[6,3,1,"","context"],[6,3,1,"","filename"],[6,1,1,"","get_cached"],[6,1,1,"","get_namespace"],[6,1,1,"","get_template"],[6,1,1,"","include_file"],[6,3,1,"","module"],[6,3,1,"","template"],[6,3,1,"","uri"]],"mako.runtime.TemplateNamespace":[[6,3,1,"","filename"],[6,3,1,"","module"],[6,3,1,"","uri"]],"mako.template":[[10,0,1,"","DefTemplate"],[10,0,1,"","Template"]],"mako.template.DefTemplate":[[10,1,1,"","get_def"]],"mako.template.Template":[[10,3,1,"","code"],[10,1,1,"","get_def"],[10,1,1,"","list_defs"],[10,1,1,"","render"],[10,1,1,"","render_context"],[10,1,1,"","render_unicode"],[10,3,1,"","source"]],"mako.template.Template.params":[[10,2,1,"","buffer_filters"],[10,2,1,"","cache_args"],[10,2,1,"","cache_dir"],[10,2,1,"","cache_enabled"],[10,2,1,"","cache_impl"],[10,2,1,"","cache_type"],[10,2,1,"","cache_url"],[10,2,1,"","default_filters"],[10,2,1,"","enable_loop"],[10,2,1,"","encoding_errors"],[10,2,1,"","error_handler"],[10,2,1,"","filename"],[10,2,1,"","format_exceptions"],[10,2,1,"","future_imports"],[10,2,1,"","imports"],[10,2,1,"","include_error_handler"],[10,2,1,"","input_encoding"],[10,2,1,"","lexer_cls"],[10,2,1,"","lookup"],[10,2,1,"","module_directory"],[10,2,1,"","module_filename"],[10,2,1,"","module_writer"],[10,2,1,"","output_encoding"],[10,2,1,"","preprocessor"],[10,2,1,"","strict_undefined"],[10,2,1,"","text"],[10,2,1,"","uri"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","parameter","Python parameter"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:parameter","3":"py:attribute","4":"py:function"},terms:{"0":[0,2,3,4,5,6,7,8,10],"0263":[1,9],"0750":1,"0775":1,"1":[0,2,3,4,5,8,9,10],"10":[2,6],"101":1,"102":1,"104":1,"108":1,"109":1,"110":1,"112":1,"11211":0,"116":1,"118":1,"119":1,"12":[2,6],"122":1,"123":[1,3],"125":1,"126":1,"127":[0,1],"128":1,"129":1,"131":1,"132":1,"135":1,"137":1,"14":3,"141":1,"142":1,"146":1,"147":1,"148":1,"15":[1,2,6],"151":1,"153":1,"154":1,"155":1,"156":1,"159":1,"16":1,"164":1,"165":1,"1684":1,"169":1,"17":[1,3],"170":1,"173":1,"174":1,"175":1,"178":1,"18":1,"180":1,"181":1,"182":1,"185":1,"186":1,"187":1,"19":1,"190":1,"191":1,"192":1,"193":1,"2":[2,3,4,5,6,7,8],"20":1,"2007":1,"2008":1,"2009":1,"201":1,"2010":1,"2011":1,"2012":1,"2013":1,"2014":1,"2015":1,"2016":1,"2017":1,"2019":1,"2020":1,"2021":1,"2022":1,"207":1,"208":1,"209":1,"21":1,"212":1,"213":1,"214":1,"216":1,"219":1,"22":1,"224":1,"225":1,"227":1,"23":1,"236":1,"24":1,"249":1,"250":1,"26":1,"267":1,"27":[1,2],"271":1,"28":1,"283":1,"287":1,"29":1,"293":1,"295":1,"296":1,"2to3":1,"3":[2,3,5,6,7,8,9,10],"30":1,"300":0,"301":1,"303":1,"304":1,"31":1,"310":1,"32":1,"328":1,"338":1,"34":1,"346":1,"349":1,"35":1,"351":1,"37":1,"39":1,"4":[2,3,5,8,10],"40":1,"45":1,"47":1,"5":[2,3,5,6,8,10],"50":1,"500":10,"51":1,"53":1,"5534":1,"56":1,"5b1":1,"6":[0,2,7,10],"60":[0,2],"62":1,"68":1,"69":1,"7":[2,4,6,7,8,10],"71":1,"73":1,"75":1,"76":1,"77":1,"78":1,"8":[2,3,4,6,9,10],"81":1,"83":1,"84":1,"86":1,"87":1,"88":1,"9":[2,4],"90":1,"92":1,"93":1,"94":1,"95":1,"97":1,"99":1,"abstract":10,"bj\u00f6rn":1,"boolean":10,"break":1,"byte":[1,9,10],"case":[0,1,2,3,5,6,7,8,10],"catch":1,"class":[0,1,2,5,6,7,10],"default":[0,1,2,3,5,6,7,8,9,10],"do":[1,2,3,5,6,7,8,9,10],"dr\u00f4le":9,"export":[2,5,8],"f\u00e9rotin":1,"final":[1,3,5,9],"float":1,"function":[0,1,2,3,5,6,7,8,9,10],"import":[0,1,2,3,6,7,8,9,10],"int":7,"long":[1,7,8],"new":[0,1,2,3,5,7,8,10],"pla\u00eet":9,"r\u00e9veill\u00e9":9,"return":[0,1,2,3,6,7,8,9,10],"short":0,"static":[4,5],"super":[0,5,6],"switch":7,"throw":[0,7],"true":[0,1,2,3,6,7,8,10],"try":[1,3,7,8,10],"var":1,"while":[1,2,3,5,8,10],A:[0,1,2,3,5,6,7,8,10],And:5,As:[0,3,5,9],At:10,But:[2,4,6,10],By:[0,1,3,5,6,9,10],For:[0,1,2,3,5,6,7,10],If:[0,2,3,5,6,7,8,9,10],In:[0,1,2,3,5,6,7,8,9,10],Is:10,It:[0,2,5,7,8,9],Its:2,No:[1,8],Of:7,On:[0,10],One:[0,3,5,7,10],Or:[0,3,5,8,10],Such:[0,2,3,5],That:[1,5,9],The:[0,1,2,4,5,10],Then:2,There:[0,2,6],These:[0,6,8,10],To:[0,2,3,5,6,7,8,10],Will:1,With:[0,1,2,7,10],_:[1,10],__:9,__builtin__:1,__builtins__:1,__class__:[1,10],__file__:6,__future__:[1,10],__getattr__:1,__html__:1,__init__:0,__len__:7,__m_:1,__name__:[0,1,10],__nonzero__:1,__str:9,__str__:7,__version__:1,_cach:0,_data:1,_my_cache_work:0,_pop_buff:1,_pop_fram:1,_push_buff:1,_push_fram:1,abil:[0,6,8,10],abl:7,about:[1,4,7,8,10],abov:[0,2,3,5,6,7,8,9,10],absolut:[1,2],accept:[0,1,3,6,7,8,9,10],access:[1,2,4,5,6,7,8,10],accessor:[0,1,5,6],accommod:1,accompani:10,accomplish:[0,8,10],accord:1,accordingli:10,account:[2,3],accountdata:2,accountnam:2,accumul:8,achiev:[2,5,7],acquir:[0,9],across:[0,7],act:[7,10],actual:[0,1,2,3,5,6,7,8,10],ad:[1,3,5,8],add:[2,3,5,10],addit:[0,1,2,3,5,6,8,10],addition:[1,5,10],address:[0,10],adjust:[1,6,8,10],adjust_uri:10,advanc:10,advantag:[5,6,10],affect:[1,7],afford:[1,10],after:[0,1,3,6,7,10],again:[2,7],against:[1,8,10],ago:1,agre:5,akkerman:1,alemb:1,algorithm:1,alias:3,all:[0,1,2,3,4,5,6,8,9,10],allow:[0,1,2,3,5,6,7,8,10],almost:[5,8],alon:1,along:[0,5,6],alor:9,alpha:1,alreadi:[1,5,7,10],also:[0,1,2,3,5,6,7,8,9,10],altern:[1,7,9,10],although:[8,9],altogeth:1,alwai:[1,2,5,7],am:2,an:[0,1,2,3,5,6,7,8,9,10],ani:[0,1,2,3,5,6,7,8,9,10],anonym:[0,1,2,8],anoth:[1,2,5,6,7,8,9,10],answer:1,anyth:[2,5,9],anywai:[1,10],anywher:[2,6,8],api:[1,3,4],appar:[1,3,6],appear:[1,3,7,8,10],append:10,appli:[1,2,3,6,7,8,9,10],applic:[1,3,7,8,10],approach:[5,7],appropri:1,approxim:10,apr:1,aptli:10,ar:[0,1,2,3,5,6,7,8,9,10],arbitrari:[0,8],arbitrarili:[1,2],area:[2,5,7,8,9],aren:[1,2],arg1:6,arg2:6,arg3:6,arg4:6,arg:[0,1,2,3,6,8,10],argpars:1,argument:[1,4,6,7,8,9,10],around:[1,3,7,10],arrai:3,arrang:8,ascii:[1,9],ask:7,aspect:8,assign:[1,2,7,8,10],associ:[0,1,7],assum:[9,10],ast:1,atom:10,attach:6,attempt:[0,1],attr:[1,5],attribut:[0,1,2,3,4,6,7,8,10],attributeerror:1,au:9,aug:1,augment:[2,4],author:7,automat:[0,2,3,5,7,8,10],avail:[0,1,2,3,5,6,7,8,10],avoid:1,awai:5,awar:[1,7],b:[3,5],babel:1,babelplugin:10,back:[1,5,7,10],backend:[1,6],backslash:[1,8],backward:[0,1],bar:[1,2,3,6,7,8,10],bare:1,base:[0,1,3,4,5,6,7,8],basemost:5,basestr:1,basi:[0,5,7],basic:[1,2,4,6,8],batch:3,batcheld:1,beaker:[1,10],beaker_cach:0,beakercacheimpl:0,bean:10,becam:1,becaus:[1,2,3,5],becom:[1,6,10],been:[0,1,3,6,10],befor:[0,1,3,5,6,8,10],began:[1,7],begin:10,behav:2,behavior:[1,3,5,7,10],being:[0,1,2,5,7,8,9,10],below:[1,2,5],ben:1,benchmark:1,best:8,better:[0,1,7],between:[1,2,5,6,7],beyond:[0,2],bit:[1,2,7,10],bitwis:1,black:[1,7],blank:[1,7],block:[0,1,4,7],blunt:0,board:7,bodi:[0,1,2,4,5,7,8,10],bold:3,bom:1,bool:7,bot:7,both:[1,2,3,5,7,9,10],bottom:1,bottommost:5,bound:1,br:2,bracket:1,breakag:1,breakdown:5,brief:10,broke:1,broken:1,buf:[3,10],buffer:[1,4,6,8,10],buffer_filt:[1,10],buffet:1,bugfix:1,build:[1,2,5,6],builder:1,buildtabl:2,built:[1,2,3,4,5,8,9,10],builtin:[1,9],bump:1,bunch:6,burden:9,bye:2,bytestr:1,bytestring_passthrough:1,c:[1,10],cach:[1,2,3,4,6,7,8,10],cache_:[0,1],cache_arg:[0,1,10],cache_dir:[0,1,10],cache_en:[0,1,10],cache_impl:[0,1,10],cache_kei:[0,1],cache_region:0,cache_timeout:[0,1,2],cache_typ:[0,1,8,10],cache_url:[0,1,10],cache_xyz:0,cacheabl:1,cacheimpl:[0,1,10],cachemanag:[0,1],calcul:10,call:[0,1,3,4,5,7,10],call_my_object:9,callabl:[0,1,2,3,6,7,8,10],callable_:[6,10],caller:[1,2,3,6,7],caller_stack:[1,6],calling_uri:6,callstack:7,came:1,camp:1,can:[0,1,2,3,5,6,7,8,9,10],cannot:[1,2,10],cant:1,capabl:[0,1,10],captur:[1,3,6,7,10],care:[0,6,7],catalog:10,categori:6,caught:10,caus:[1,3,6,7,10],cazabon:1,central:[2,3,7,8],certain:[1,3,6,9,10],cfg:[1,10],cgi:[1,3],chain:[1,5,6,7,8],chang:[0,3,5,7,9],changelog:4,chapter:[2,3,4,5,10],charact:[1,8,10],characterist:8,charl:1,check:[1,5,7,8,9],checker:7,chevalli:1,child:5,chosen:0,christoph:1,clarifi:1,class_:5,classic:[6,8],clean:[0,1,10],cleaner:7,clock:1,close:[1,2,6,8,10],closur:2,cmd:1,cmdline:1,code:[1,2,3,6,7,8,9,10],codebas:1,codec:[9,10],codegen:1,codi:1,col:2,collect:[0,1,6,7],collection_s:10,collis:1,colomiet:1,colon:[0,8],column:2,com:1,combin:[1,7],come:[0,2,5,8,9,10],comma:[2,3,10],command:[1,10],comment:[1,4,9,10],common:[1,4,5,6],commonli:[0,5],commun:[2,7],comp1:6,comp2:6,comp:6,compar:10,compat:[0,1,6,10],compil:[0,1,7,8,10],compileexcept:1,complet:[1,5,6,10],complex:1,compon:[0,6,7],comprehens:1,concaten:[3,10],conceiv:7,concept:[2,8,10],condit:[1,2,5,8],condition:[1,6],configur:[0,1,5,6,10],conflict:0,conform:1,confus:5,conjunct:[1,5,10],consid:[1,7,10],consist:8,conson:7,constant:[1,7],construct:[0,1,2,5,6,8,9,10],constructor:1,consum:[0,1,8],contain:[0,1,2,6,8,9,10],content:[0,1,3,6,7,8,10],context:[0,1,2,3,4,5,6,9,10],contextu:2,contigu:8,continu:[1,8,10],contrast:[2,5],contrib:1,contribut:1,contriv:10,control:[1,2,3,4,5,7,10],convei:10,conveni:0,convent:[2,6],convers:[1,9],convert:[0,1,9,10],convert_com:1,copi:[1,6,7],core:1,correct:[1,6],correctli:[1,7],correspond:[0,5,6,7,10],corrupt:1,could:[1,5],couldn:1,count:[2,7,10],coupl:1,cours:[1,7],courtesi:1,cover:1,coverag:1,cr:1,creat:[0,1,2,6,7,8,10],creation:[0,1,2,3,10],creation_funct:0,critic:1,crlf:1,cross:1,css:[1,6,10],cstringio:1,ctx:10,current:[1,2,5,6,7,8,10],current_sect:8,custom:[1,2,3,5,6,8,9,10],d:[2,5,6,7],dahlgren:1,dairiki:1,daniel:1,data:[0,1,2,3,6,7,9,10],databas:2,date:1,daverio:1,db:8,dbm:0,de:9,deal:[7,8],dealt:10,dec:1,decid:[7,8],decis:[5,7],declar:[1,2,3,4,5,8,10],decod:[1,3,9],decor:[1,4,6],decreas:6,deepli:2,def:[0,1,4,7,10],default_filt:[1,9,10],default_tim:1,defin:[1,2,3,4,5,6,7,8,10],definit:[2,3,5,6],defnam:[1,2],deftempl:[2,10],delai:1,deliv:[1,3,6],delta:6,demarc:2,denot:8,depend:[1,4,8,10],deploy:1,deprec:[1,10],depth:7,derek:1,deriv:[0,1,3],describ:[1,2,3,5,6,7,8,9,10],descript:[0,6,7,10],descriptor:1,design:3,desir:[1,6,9,10],despit:1,dessin:9,dest:10,destin:10,detail:[2,5,7,8,9,10],detect:1,determin:[0,1,9],determinist:3,dev:1,develop:[1,9],dict:1,dictionari:[0,1,6,7,10],did:[1,5],differ:[0,1,2,5,6,7,10],differenti:7,dir:[0,1,10],direct:[0,1,2,6,8,10],directli:[0,1,2,3,6,8,10],directori:[0,1,3,7,9,10],dirnam:10,disabl:[0,1,3,7,10],disable_unicod:1,disait:9,disallow:1,discard:3,discuss:1,disgard:9,displai:[1,10],disregard:10,distinct:[1,10],distinctli:5,distribut:10,distutil:10,div:[2,5,6,10],divis:10,do_something_speci:0,doc:[1,2,7,9,10],document:[0,1,5,8,9,10],doe:[1,2,5,6,7,8],doesn:[1,2,5,6,7],don:[0,1,2,5,7],done:[9,10],dot:1,doubli:1,down:[0,1],dragon:1,draw:3,drive:1,drop:[1,8],du:9,due:1,dump:[3,6],dure:[1,5,10],dyn:6,dynam:[1,5,8],e:[0,1,2,3,5,6,7,8,10],each:[0,1,2,5,6,7,8,10],earli:[1,4],earlier:0,eas:[3,7],easi:[3,7],easier:0,ed:[2,8],edgewal:1,eeve:1,effect:[0,1,2,3,6,10],egg:7,either:[0,1,5,7,8,9,10],el:8,elabor:1,elem:8,element:[1,2,5,7,8,10],elif:8,ell:9,els:[0,1,7,8,10],elsewher:1,emac:1,email:8,emb:[6,8],embed:[1,6,7,8,10],emit:[1,8],empti:[1,3,8],enabl:[0,1,7,8,10],enable_loop:[1,7,10],enclos:[1,2,7],encod:[1,3,4],encoding_error:[1,9,10],encount:[1,5],end:[1,3,5,8],endfor:[2,6,7,8],endif:[1,2,6,7,8],endless:1,endwith:1,enforc:1,enorm:2,ensur:[0,1,6,9],entir:[2,3,5,6,8,9,10],entiti:[1,3],entri:[0,1,10],entrypoint:[0,1],enumer:7,environ:[1,3,4,8,10],epoch:0,equival:[0,2,3,6,8],eric:1,errant:1,error:[1,2,7,10],error_handl:[1,10],escap:[1,2,3,4],essenti:[0,6],establish:[1,7,10],etc:[0,1,2,6,7,8,10],eval:1,evalu:[1,2,6,8],evaul:1,even:[1,5,7,8],ever:6,everi:[1,6,8],everyon:7,everyth:[1,7],exactli:[2,5],examin:6,exampl:[0,1,2,3,4,5,7,8,10],exc:1,exc_info:[1,10],exceed:7,except:[0,1,2,3,4,6,7,8],excerpt:10,exclus:[1,10],exec:1,execut:[0,1,2,3,5,6,7,8,10],exist:[0,1,2,6,7,8,10],exit:[1,4],expand:1,expect:[1,2,5,7,8,9],experienc:7,expir:[0,1],expiri:1,explcitli:1,explicit:[0,1,2,6,7,8,9],explicitli:[1,5,6,7,9,10],expr:[1,2,6],express:[1,2,4,5,6,7,10],expression_filt:[1,3],ext:[0,1,10],extens:1,extern:[0,2,5],extra:[1,5,8],extract:[1,10],extractor:[1,10],f:[8,10],facad:0,facet:7,facil:5,fact:[2,5],fail:1,failur:7,fake:8,fall:0,fals:[0,1,7,10],familiar:[2,8],far:[1,5,8,10],fashion:0,fastencodingbuff:1,faster:1,favor:1,featur:[0,5,7,8,10],feb:1,few:[1,7],field:10,file:[0,1,4,5,6,7,8],filehandl:[1,9],filenam:[0,1,6,10],filename_to_uri:10,filesystem:[0,1,6],filesystem_check:10,filter:[1,2,4,7,9,10],find:[7,8,10],finish:5,first:[0,1,3,5,6,7,8,9,10],five:[0,8],fix:[0,1,6,10],flag:[0,1,3,6,7,8,10],flexibl:[3,5,8],flip:2,flow:8,fn:3,follow:[1,2,5,6,7,8,10],foo:[1,2,3,6,7,8,9,10],footer:[5,8],forc:1,form:[1,2,6,8],format:[1,2,3,6,8,10],format_except:[1,10],formatt:1,former:1,forward:1,found:[1,2,7,8],four:[6,8],fragment:1,frame:1,framework:4,francoi:10,free:[1,6],freeli:7,fri:1,frobnizzl:8,from:[0,1,3,4,5,7,9,10],frozenset:1,full:[1,8,10],fulli:[1,3,5,10],func:6,further:[1,8],futur:[1,6,8],future_import:[1,10],futures_import:10,fyi:1,g:[0,1,5,10],gae:1,gagern:1,garbag:0,gave:10,geisler:1,gener:[0,1,2,3,5,6,7,8,10],genshi:8,georg:1,get:[0,1,3,5,6,7,8,10],get_cach:6,get_def:[1,2,3,10],get_namespac:[1,6],get_or_cr:[0,1],get_resourc:8,get_templ:[0,6,9,10],getargspec:1,getattr:6,getdefaultencod:1,getfullargspec:1,gettext:[1,10],getvalu:[3,10],github:1,give:[2,6],given:[0,1,2,3,5,6,7,10],global:[0,2,5,6,7],glyph:1,go:[1,7],goal:[1,3],goe:8,good:[0,1,8],got:1,great:6,grei:5,group:[0,1,6],gt:3,guess:1,guest:1,guid:10,h2:[5,8],h:[2,3,8],ha:[0,1,2,3,5,6,7,8,10],hack:[1,7],had:1,hadn:1,haltner:1,ham:7,hand:5,handi:6,handl:[0,1,2,4,7,8],handler:[1,10],happen:[6,7],hard:[5,7,8,9],harland:1,has_templ:10,hasattr:6,hash:1,hasn:1,have:[0,1,2,3,5,6,7,8,9,10],head:[1,2,5,6,10],header:[0,1,2,5,8,10],hello:[2,6,8,9,10],help:[0,1,10],helper:10,here:[0,1,3,5,6,7,8,9,10],hi:[2,3],higher:1,highlight:[1,10],hit:3,hold:6,home:1,honor:1,hopefulli:1,how:[1,2,6,7,8,10],howev:[1,2,5,6],href:[2,6],htdoc:10,html:[0,1,2,3,5,6,8,10],html_error_templ:[1,10],html_escap:1,htmlentitydef:3,htmlentityreplac:[1,10],http:1,huayi:1,hugo:1,hw:6,hypothet:5,i:[0,1,2,3,5,6,7,8,10],id:[0,1,10],idea:[1,5,8],ideal:1,ident:[1,6,10],identifi:[0,1,8,10],ignor:[7,8],il:9,illustr:[3,5,10],imag:10,imaginez:9,imankulov:1,immedi:[1,5,7,8,10],immut:7,impl:0,implement:[0,1,2,5,10],impli:10,implic:9,implicit:[0,7],implicitli:1,importlib:[0,1],importlib_metadata:1,improv:[1,8,10],incl:6,includ:[0,1,2,3,4,6,7,10],include_error_handl:[1,10],include_fil:[1,6],incom:9,incompat:1,incorrect:1,increas:10,indent:[1,8],index:[1,4,5,6,7,8,10],indic:[0,1,7,8],individu:[0,1,2,7,10],info:[1,10],inform:[1,6,8,10],inher:3,inherit:[0,1,2,4,7,10],ini:1,initi:[1,2],inject:10,inlin:[1,5,7,8],inner:[1,2],input:[1,2,3],input_encod:[1,9,10],insensit:1,insert:[5,10],insid:[0,1,2,5,6,8,10],inspect:1,inspir:8,instal:[0,1],install_requir:1,instanc:[6,7,8,10],instead:[1,2,3,5,6],insur:1,integ:[0,2,9],integr:[0,1,4,5],intend:[1,3,6],intent:3,interact:[5,6],interchang:5,interest:10,interfac:0,intermedi:5,intermix:5,intern:[0,1,3,7,9,10],interpret:[1,2,10],interven:1,intric:1,intro:2,introduc:[1,2,5,6,7,8],invalid:[0,1],invalidate_bodi:[0,1],invalidate_closur:[0,1],invalidate_def:[0,1],invoc:5,invok:[2,5,8,10],involv:[1,5],ioerror:1,iou:7,ip:0,isn:[1,7],issu:[1,2,10],item:[2,7,8],iter:[2,6],its:[0,1,2,3,5,6,7,8,9,10],itself:[0,1,2,3,5,6,7,8,9,10],jack:10,jan:1,javascript:6,jeff:1,jinja2:[1,2,8],jinja:1,jit:7,job:3,joe:8,john:2,jonathan:1,jot:7,jour:9,js:6,json:[1,3],jsp:8,jul:1,jun:1,just:[1,2,3,5,6,7,8,10],jut:7,jython:1,keep:2,kei:[0,1,5,6,7,10],keyerror:7,keyword:[1,2,5,6,7,8,9,10],kind:[0,3,5,6,7,8,10],know:5,known:[1,2,6],kw:[0,1,3],kwarg:[0,1,6,7,10],lack:1,lacsap:1,lai:2,lambda:1,languag:[2,8],larg:[1,5],last:[1,7,10],last_modifi:1,later:[0,8],latest:1,latter:1,laurent:1,layout:[1,2,5,6,10],layoutdata:2,lead:[1,3,6,7],least:[6,10],left:[3,10],leftmost:3,legaci:[1,10],legacy_html_escap:1,legendari:1,len:8,less:[1,5,7],let:[1,2,5,7,10],level:[0,1,2,3,4,5,6,7,9,10],lever:9,leverag:8,lex:1,lexer:[1,8,10],lexer_cl:[1,10],lf:1,li:[2,5,7,8],lib:1,librari:[0,1,2,3,6,10],lieu:10,lift:5,lighter:1,like:[0,1,2,3,5,6,7,8,9,10],line:[1,5,8,10],lineno:10,lingua:1,link:[6,10],linkag:5,list:[0,1,2,3,5,7,8,10],list_def:[1,10],lister:2,liter:[1,3,6,10],littl:[1,2,7,10],live:0,ll:[3,5],load:[1,6,8,10],load_templ:1,loader:1,local:[0,1,2,3,7,8,10],locals_:1,locat:[1,6,7,9,10],lock:0,logic:[1,3],long_term:0,longer:1,look:[0,1,2,5,6,7,9,10],lookup:[0,1,7,9,10],loop:[1,2,4,10],loopcontext:7,lopez:1,lost:1,lot:[1,8],lower:1,lt:3,m:[2,9],ma:9,made:[0,1,7],magamedov:1,magic:[1,7,9],mai:[0,1,3,6,7,8,9,10],main:[1,2,3,5,6,7,9,10],mainlayout:[2,5],mainli:[1,6],maintain:[0,1,10],major:[1,7],mak:1,make:[0,1,2,3,5,6,7,8,10],mako:[0,1,2,3,4,5,6,8,9,10],mako_cach:0,mako_modul:10,manag:[0,1,7],manfr:1,mani:[1,7,8],manner:3,manual:10,map:[1,10],mar:1,marker:[1,8],markupsaf:[1,3],martin:1,matter:5,maxim:0,maximum:1,mayb:5,me:7,mean:[0,1,2,3,5,6,7,8,10],meant:5,mechan:[0,5,8],member:[7,8,10],memcach:[0,1],memori:[0,1,8,10],merg:1,mess:1,messag:[1,7,10],met:2,metadata:[1,8],metaphor:5,metatada:0,method:[0,1,2,3,4,5,8,9,10],mi:1,microsecond:1,middl:[3,5,8],might:[5,6,7,8],migrat:[1,10],mimic:10,mini:7,minim:0,minor:10,minu:[0,1],minut:0,mirror:10,miss:[1,3,7,10],mistak:5,mix:1,mkstemp:10,mode:1,model:2,moder:10,modern:[0,1],modifi:[1,2,5,9,10],modul:[0,1,2,3,4,5,7,10],module_directori:[0,1,10],module_filenam:[1,10],module_writ:[1,10],modulenam:0,modulename_cal:[1,10],modulenamespac:6,modulepath:0,moduletempl:1,moi:9,moment:10,mon:1,monkeypatch:1,more:[0,1,2,3,5,6,7,8,10],most:[0,1,2,5,6,7,8,10],mostli:[0,1,6,7,10],mouton:9,move:10,msgid:10,msgstr:10,much:[1,2,5,8,9],multi:1,multibyt:[1,10],multilin:[1,8],multipl:[0,1,2,4],multithread:0,must:[0,1,2,5,6,9,10],mutual:10,my_tag:6,mycomp:0,mydef:2,myescap:3,myexpress:3,myfil:8,myfilt:[1,3],myfunc:8,myghtyutil:1,mylib:8,mylookup:[9,10],myn:1,mynamespac:[6,8],mypackag:3,myproj:10,mystuff:2,mystyl:6,mytag:6,mytempl:[0,1,9,10],mytmpl:10,n:[1,10],name:[0,1,3,4,8,10],nameerror:[1,7,10],namespac:[0,1,2,3,4,7,10],namespace_nam:6,namespacenam:[1,2,8],nativ:9,natur:3,necessarili:[1,7],ned:1,need:[0,1,2,5,6,7,9,10],neither:0,nest:[0,1,2,3,4,7],nestabl:2,never:1,newer:[2,10],newli:0,newlin:[1,4],next:[0,2,3,4,6,7,8,9,10],ninja:5,no_tag:1,node:1,non:[1,7,8,9,10],none:[0,1,3,6,7,8,10],normal:[1,2,3,7,8,9,10],nose:1,note:[0,1,2,3,5,6,7,9,10],noth:5,notic:2,notimplementederror:10,notion:7,nov:1,now:[1,3,5,7,8,9],ns:6,number:[0,1,2,3,7,8,10],numer:[3,8],nutshel:5,object:[0,1,2,3,5,6,7,8,9,10],objnam:0,observ:1,obsolet:1,obvious:5,occlud:1,occur:[0,1,2,10],oct:1,odd:[1,7],off:[0,1,2,5,6],offer:8,often:[5,6],ok:8,old:[1,7],older:[2,4,8],omit:1,onc:[2,5,7,8],one:[0,1,2,3,5,6,7,8,9,10],ongo:1,onli:[0,1,2,3,5,7,8,9,10],onto:[7,8],open:[5,8,9],oper:[1,2,3,6,7,8,9,10],opposit:5,opt:[0,1,10],optim:1,option:[0,1,6,7,8,10],optpars:1,order:[0,1,5,8,10],ordinari:6,org:1,organ:[5,6],orient:[2,5],origin:[0,1,3,6,7,10],os:10,other:[0,1,3,5,6,7,8,9,10],otherwis:[1,7,8,10],our:[0,1,2,5,10],out:[0,1,2,5,8,10],outer:2,output:[1,2,3,4,5,6,7,8,10],output_encod:[1,9,10],outputpath:10,outsid:[1,2,5,6,7],outward:10,over:[1,3,6,7],overhead:1,overrid:[0,1,5,6,7,9,10],overridden:[0,2,5,6],overrod:5,overwritten:0,own:[0,1,2,3,5,6,7,8,9,10],p:1,pack:1,packag:[0,1,8],page:[0,1,3,4,5,6,7,10],pagearg:[1,2,6,7],pagecontrol:2,pair:1,paradigm:5,param:8,paramet:[0,1,6,9,10],parent:[0,1,2,4,6,10],parenthes:1,pariti:7,pars:[1,8,9,10],parseabl:1,parser:1,part:[0,1,5,6,7],parti:0,partial:[1,5],particip:5,particular:[0,1,5,6,7,10],particularli:[1,6],pass:[0,1,2,5,6,7,8,10],pass_context:[0,1],passthru:1,patch:1,path:[0,1,6,10],pathnam:1,pattern:10,paul:1,pbj:7,penalti:1,peopl:1,pep:[1,9],per:[0,1,5,7,8],percent:[1,8],percentag:10,perform:[1,3,6,9,10],perhap:[2,7,8],perl:8,perm:1,perman:1,permiss:[1,10],persist:[0,1],petit:9,petr:1,phase:10,philosophi:7,pigott:1,pinard:10,pipe:[1,3],pit:7,pkg_resourc:1,place:[0,1,2,5,8,10],plai:[6,9],plain:[1,2,6,8,10],platform:10,pleas:8,plu:[1,10],plug:0,plugin:[1,4],point:[0,1,2,5,6,8,9,10],polymorph:8,pop:[0,3,7],pop_buff:3,pop_cal:7,popul:0,popular:10,populate_self:6,portabl:2,portion:[1,2],posit:6,possibl:[0,2,3,7],post:[2,10],post_pros:2,pot:7,potenti:5,pow:8,power:8,practic:[1,5],pre:[1,10],preambl:10,preced:[5,6,8,9,10],precompil:1,predefin:1,prefer:1,prefix:[0,1,7],prep:7,prepend:1,preprocessor:[1,10],presenc:1,present:[0,1,2,5,6,7,10],preserv:1,pretti:8,prevent:[1,8],previou:[1,2,5,6,7,10],previous:[1,6,9,10],primari:10,primarili:7,print:[1,2,9,10],prior:[3,7],privat:1,probabl:[0,1,2,7,10],procedur:0,process:[0,1,5,8,9],produc:[1,2,3,4,6,7,8,9,10],product:10,program:8,programat:10,programmat:[1,3,4,6,7,9],progress:7,project:[1,10],propag:[1,7,8,10],proper:10,properli:1,properti:[1,6,10],propig:1,provid:[0,1,2,3,5,6,7,8,10],proxi:6,prune:1,pull:[1,2,6,7,10],pullreq:1,pure:[1,6,8,9],purpos:[1,7,8,9,10],push:7,push_buff:3,push_cal:7,put:[0,1,5,6,7],put_str:10,put_templ:10,py2:1,py2k:1,py3k:1,py:[1,6,10],pybabel:10,pygment:1,pygmentplugin:10,pylon:[1,10],pypa:1,pypars:1,pypi:1,pyramid:1,pytest:1,pythagorean:8,python3:1,python:[1,2,3,4,5,7,9,10],quand:9,quick:[1,2,8],quot:1,quote_plu:3,r:8,rachum:1,rais:[1,2,7,10],ram:1,random:1,rang:[1,2,8],rather:[1,7],raw:[1,9,10],re:[0,1,5,7,8,10],reach:[7,10],read:[7,8,9],readm:1,real:[1,8,10],realli:1,reason:[1,7],recal:5,receiv:[1,2,3,6,8],recent:[1,10],recogn:[5,6],recommend:[1,6],recompil:[0,1,10],record:[6,8,10],recurs:1,red:7,reduc:3,reduct:1,refactor:1,refer:[1,2,3,4,5,8],referenc:[1,2,5,6,7],reformat:1,refresh:1,regard:1,regardless:[1,2,5,7],regener:[1,10],regexp:1,region:[0,1],regist:[0,1],register_plugin:[0,1],regress:1,regular:[1,2,3,4,5,8,10],reiter:1,rel:[1,6,10],relat:[0,1,10],relationship:6,relativeto:10,releas:[0,1,6,8],reli:1,reload:10,remain:[1,2,7],remot:[2,6],remov:[1,6],render:[0,1,2,3,4,6,7,8,9,10],render_:7,render_bodi:[3,7,10],render_context:10,render_mydef:7,render_unicod:[1,9,10],reopen:1,repair:1,replac:[0,1,3,9,10],report:[1,10],repres:[0,1,2,7,8,10],represent:[1,8,10],request:[0,1,6,7,10],requir:[0,1,2,3,6,8,9],requset:1,reserv:1,reserved_nam:1,reset:1,resolut:[5,6,10],resolv:[1,10],resourc:[1,5,10],respect:8,respons:[0,5,6,7],rest:[0,5,8],restrict:[1,2,5],result:[1,2,3,5,7,8,10],retriev:[0,1],reveal:1,revers:10,reverse_index:7,reverse_record:10,reverse_traceback:10,revis:10,rework:1,rewrot:1,richtraceback:[1,10],right:[1,2,3,7,8],role:6,roman:1,root:[1,10],roughli:8,routin:10,row:2,rudiment:[0,10],rule:[1,2,5],run:[1,3,5,6,7,9,10],run_wsgi:[1,10],runner:[1,10],runtim:[0,1,3,4,5,6,8,10],runtimeerror:1,s:[0,1,2,3,5,6,7,8,9,10],safe:7,sai:[1,2,5,7,9,10],sake:3,same:[0,1,2,5,6,7,8,10],sampl:10,sane:2,sat:1,scaffold:6,scalar:[1,6],scenario:[1,2,5,6,7,10],scheme:[1,2,6,7,10],scope:[0,1,2,5,6,7,8],scott:1,script:[1,6],search:[4,10],second:[0,2,3],section:[0,1,2,5,6,7,8,10],sectiona:5,secur:1,see:[0,1,2,6,7,8,9,10],seem:1,select:[1,5],selector:1,self:[0,1,2,5,7,8,10],semant:[1,2,5,8],semi:0,send:[1,3,5,6,7,10],sens:7,sent:[1,3,6,7,8],sep:1,separ:[0,1,2,3,5,10],sequenc:1,seri:[0,1],serious:5,serv:[8,9,10],serve_templ:10,server:[0,8,10],servic:[0,8],set:[0,1,3,6,7,8,9],setup:[0,1,5,10],setuptool:[0,1,10],sever:[1,6],shall:5,share:[1,2,7],sharp:2,shell:1,shop:7,short_term:0,should:[0,1,6,7,10],shouldn:7,shown:1,shutil:10,side:[1,2,3,8],sidebar:2,sign:[1,8],signatur:[0,1,2,6,10],signific:[7,8],silent:[1,7],similar:[2,3,5,6,7,8,10],similarli:[2,9],simpl:[0,2,7,8,10],simplecacheimpl:0,simpler:1,simplest:8,simpli:[3,5],simplic:3,simplifi:1,sinc:[1,2,5,6,7,9,10],singl:[0,1,2,3,5,8,10],singleton:7,sinoroc:1,skip:[1,10],slain:1,slash:[1,6,8],slight:1,slightli:6,slim:0,slowdown:1,slower:9,small:[1,10],smoothli:5,so:[0,1,2,3,5,6,7,8,10],some:[0,1,2,3,5,6,7,8,9,10],some_cal:1,some_condit:2,some_namespac:6,some_other_directori:1,some_tag:1,some_templ:[1,10],somedata:2,somedef:[0,1,2,3,6,8],someencod:1,somefil:[1,6],somefunct:6,somekei:[0,1],somemodul:1,someobject:6,sometempl:0,someth:[2,3,9],sometim:[1,5,8],somev:[6,7],somevalu:0,somewhat:[2,3],somewher:[7,10],sophist:5,sound:[5,8],sourc:[1,5,8,10],space:[0,1,2,8],spam:7,span:[2,5],special:[0,1,3,7,8,10],specif:[1,2,3,5,7,8,10],specifi:[0,1,3,4,5,7,10],speed:[1,3],speedup:1,sphinx:1,sqlalchemi:1,src:6,stack:[1,3,7,10],stacktrac:1,stage:10,stai:[0,7],stale:1,standalon:[1,10],standard:[0,1],start:[0,2],starttim:0,startup:1,state:[1,2,5,7,9],statement:[1,2,8,10],stdout:[1,10],step:[1,2,9,10],stick:[1,2,7,8],still:[1,2,5,9],stop:[7,8],stop_rend:[1,8],storag:1,store:[0,1,3,7,10],str:[1,3,7,9,10],straight:1,strategi:0,stream:[1,6,7,8,9,10],streamlin:5,strict:10,strict_undefin:[1,7,10],strictli:1,string:[0,1,3,6,7,8,9,10],stringifi:1,stringio:[1,7,10],strip:[1,3],stripe:7,structur:[1,4,5,7],stuff:[6,8],style:[1,2],stylesheet:[6,10],sub:[2,8],subclass:[0,2,10],subcompon:2,subdef:2,subdirectori:1,subject:1,subsequ:0,substitut:[3,4,7,10],succe:1,success:10,suggest:1,suit:[1,5],summari:8,sun:1,supersed:[0,1],suppli:[1,6,8],support:[0,1,2,6,8,9,10],supports_cal:[1,6],suppos:[0,2],suppress:3,sure:[1,8],surpris:9,surround:[1,8],suspend:8,svn:1,swap:0,sy:[1,10],symbol:[1,8],synchron:1,synonym:[0,1,6],syntact:8,syntax:[1,2,3,4,9,10],system:[0,1,2,5,7,10],t:[0,1,2,3,5,6,7,8,9,10],tabl:[1,2,7],tack:6,tag:[0,1,2,3,4,5,6,7,10],tagfilt:3,tailor:2,take:[1,2,3,5,6,8,9],taken:[0,1,6,10],target:[1,2,3],task:0,taylor:1,td:[2,7],techniqu:7,techspot:1,tell:8,tempfil:[1,10],templat:[0,1,2,3,4,6],templatecollect:10,templatelookup:[0,1,3,4,6,7,9],templatelookupexcept:10,templatenam:10,templatenamespac:6,templatetext:[3,9],templateuri:6,temporari:1,temporarili:1,term:0,test:1,testcas:1,text:[0,1,2,3,6,7,9,10],text_error_templ:[1,10],textmat:1,textual:[3,5,10],tg:1,tgplugin:1,than:[0,1,3,5,7,8,9],thank:1,thei:[1,2,3,5,7,8,10],them:[1,2,3,5,6,7,10],themselv:[0,2,5,6,7,8],theorem:8,therebi:6,therefor:[5,6,8,10],thereof:1,thi:[0,1,2,3,5,6,7,8,9,10],thing:[1,2,5,7,8],think:7,third:0,those:[0,1,2,6,7,8,10],though:[0,1,5,7],thread:0,threadsaf:0,three:[7,8],through:[1,6,7,9,10],throughout:[1,6,8],thrown:[0,10],thu:[1,10],time:[0,1,2,3,4,6,10],timeit:1,timeout:[0,1],timestamp:[0,1],tinker:1,titl:[2,5,8],tmbundl:1,tmp:[3,10],togeth:[5,6],token:1,too:[1,3,5],tool:[0,1],toolbar:[5,8],top:[0,1,2,3,5,6,7,10],toplevellookupexcept:1,toplevelnotfound:10,topmost:[5,6,7,8],torborg:1,toscawidget:1,touch:1,toward:[1,2,5],tox:1,tr:[2,7],trace:[1,10],traceback:[1,10],tracelin:10,track:[1,7],trail:3,transform:3,transit:7,translat:[1,10],transpar:7,travers:6,treat:1,treatment:9,tri:[2,7,10],trim:[1,3,8],trofatt:1,tryexcept:1,tue:1,tupl:[1,10],turbogear:1,turn:[1,5],twist:2,two:[0,1,2,3,5,7,8,10],txt:[8,9,10],type:[0,1,2,3,6,7,8,9,10],typeerror:[1,7],typic:[0,10],u:[1,3,8],ul:[2,5,7,8],ultim:[1,5,6],umask:1,un:9,unbound:10,unbuff:3,unclos:1,uncommon:1,undeclar:[1,10],undefin:[1,2,7,8,10],under:[0,1,10],underli:[0,1,2,3,5,6,7,8,10],underneath:0,underscor:1,understand:5,understood:0,unescap:1,unexplain:1,unicod:[1,3,4],uniniti:7,uniqu:[0,5,7],unit:1,unittest:1,univers:1,unknown:1,unless:[7,9],unlik:9,unnecessari:1,unreach:2,until:[1,10],unusu:10,up:[0,1,3,5,6,7,10],updat:[1,10],upon:[0,1,2,3,5,10],uri:[1,6,8,10],url:[0,1,3,8,10],urllib:3,us:[1,3,4,8,9],usabl:2,usag:[0,1,2,3,4,5,7,9],use_pag:3,user:[1,7,8,10],usernam:[2,8],usual:[0,1,3,7,8,10],utf8:[3,9],utf:[1,3,9,10],util:[1,10],valid:8,valu:[0,1,2,3,6,7,8,10],vanasco:1,variabl:[1,2,5,6,8,10],variant:[1,8],varieti:[0,6,8],variou:[1,3,6,7,8,9,10],ve:8,vendor:1,veri:[0,1,2,5,10],version:[0,2,3,4,5,7,8,9,10],versu:[1,6,10],via:[0,1,2,5,6,7,8,9,10],view:10,viktorin:1,vincent:1,vladimir:1,voix:9,von:1,vou:9,vowel:7,vs:1,w:1,wa:[0,1,2,5,6,7,8,9,10],wai:[0,1,2,3,4,5,7,8,9,10],walkthrough:2,want:[0,2,3,5,6,7,8,9],warn:1,wasn:[1,5,7],we:[0,1,2,3,5,6,9,10],web:10,wed:1,weight:1,welcom:1,well:[0,1,2,3,5,6,7,8,10],were:[1,5,6,7,9],what:[1,2,4,6,7,8,10],whatev:[1,6,7,9,10],whatsoev:1,wheel:1,when:[0,1,2,3,5,6,7,8,10],whenev:[5,10],where:[0,1,2,3,5,6,7,8,10],wherea:[2,7,8],wherebi:1,whether:[1,3,7,8],which:[0,1,2,3,5,6,7,8,9,10],white:[1,5],whitespac:[1,2,3,8],who:1,whole:[1,2,3,5,6],whoop:1,why:7,wichert:1,wide:1,widget:2,window:1,wise:1,wish:[0,3,7],within:[0,1,3,5,6,7,8,10],without:[0,1,5,6,7],won:[5,7,10],wonder:8,word:[5,10],work:[0,1,2,3,5,6,7,9,10],world:[2,6,7,8,9,10],woroshow:1,would:[0,1,2,3,5,7,10],wouldn:[6,8],wrap:[1,2,4,8],wrapper:3,write:[1,3,6,7,8,9,10],writer:7,written:[1,5,8,10],wsgi:1,wsgiutil:10,x:[1,2,3,6,8],xie:1,xml:[1,3,8,10],xx:1,y:[2,6,8],ya:2,ye:5,year:1,yet:[0,1,6],ymmv:1,you:[0,1,2,3,5,6,7,8,9,10],your:[1,2,3,5,6,7,8],yourself:[9,10],yve:1,z:[6,8],zebra:7,zer0:1,zero:1,zhang:1,zimport:1,zzzeek:1},titles:["Caching","Changelog","Defs and Blocks","Filtering and Buffering","Table of Contents","Inheritance","Namespaces","The Mako Runtime Environment","Syntax","The Unicode Chapter","Usage"],titleterms:{"0":1,"1":1,"10":1,"11":1,"12":1,"13":1,"14":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"static":6,But:5,One:6,The:[3,6,7,8,9],about:5,access:0,accessor:7,all:7,api:[0,6,7,10],argument:[0,2,3],attr:6,attribut:5,augment:5,babel:10,backend:0,base:10,basic:10,beaker:0,block:[2,3,5,8],bodi:6,buffer:[3,7],bug:1,built:[6,7],cach:0,call:[2,6,8],chang:1,changelog:1,chapter:9,check:10,collect:10,comment:8,common:10,content:[2,4,5],context:[7,8],control:8,cycl:7,declar:6,decor:3,def:[2,3,5,6,8],default_filt:3,defin:9,defnam:8,depend:6,doc:8,dogpil:0,earli:8,embed:2,encod:[9,10],environ:7,escap:8,exampl:6,except:10,exit:8,express:[3,8,9],featur:1,file:[2,9,10],filesystem:10,filter:[3,8],framework:10,from:[2,6,8],guidelin:0,handl:[9,10],includ:[5,8],indic:4,inherit:[5,6,8],integr:10,iter:7,legaci:7,level:8,local:6,loop:[7,8],mako:7,method:[6,7],migrat:7,misc:1,modul:[6,8],multipl:5,n:3,name:[2,5,6,7],namespac:[5,6,8],nest:5,newlin:8,next:5,nsname:8,off:3,older:1,other:2,output:9,page:[2,8],parent:[5,7],plugin:0,produc:5,programmat:[0,2],pygment:10,python:[6,8],refer:[0,6,7,10],regular:6,render:5,reserv:7,runtim:7,self:6,set:10,size:10,specif:[0,6],specifi:9,structur:8,substitut:8,syntax:8,tabl:4,tag:8,templat:[5,7,8,9,10],templatelookup:10,text:8,time:5,turn:3,two:6,unicod:[9,10],us:[0,2,5,6,7,10],usag:[6,10],variabl:7,version:[1,6],wai:6,what:5,within:2,word:7,wrap:5,write:0,wsgi:10}})