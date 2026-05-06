// A comprehensive list of common English words for the unscrambler
// Covers 2-8 letter words across all categories

export const WORD_LIST = new Set([
    // 2-letter words
    "aa","ab","ad","ae","ag","ah","ai","al","am","an","ar","as","at","aw","ax","ay",
    "ba","be","bi","bo","by",
    "da","de","do",
    "ed","ef","eh","el","em","en","er","es","et","ex",
    "fa","fe",
    "gi","go",
    "ha","he","hi","hm","ho",
    "id","if","in","is","it",
    "jo",
    "ka","ki",
    "la","li","lo",
    "ma","me","mi","mm","mo","mu","my",
    "na","ne","no","nu",
    "od","oe","of","oh","oi","om","on","op","or","os","ow","ox","oy",
    "pa","pe","pi",
    "qi",
    "re",
    "sh","si","so",
    "ta","ti","to",
    "uh","um","un","up","us","ut",
    "we","wo",
    "xi",
    "ya","ye","yo",
    "za",
  
    // 3-letter words
    "aba","ace","act","add","ado","ads","adz","aff","aft","age","ago","ague","aid","aim","air","ait","ale","all","alm","alp","als","alt","ama","amp","and","ane","ant","any","ape","apt","arc","are","ark","arm","art","ash","ask","asp","ass","ate","awe","awl","awn","axe","aye",
    "baa","bad","bag","ban","bar","bat","bay","bed","beg","bet","bid","big","bit","bog","boo","bow","box","boy","bra","bud","bug","bum","bun","bus","but","buy",
    "cab","can","cap","car","cat","caw","cob","cod","cog","cop","cot","cow","cry","cub","cup","cur","cut",
    "dab","dad","dam","dap","daw","day","den","dew","did","dig","dim","din","dip","doe","dog","don","dot","dry","dub","dud","due","dug","duo","dye",
    "ear","eat","eel","egg","ego","elf","elm","emu","end","era","eve",
    "fad","fan","far","fat","fax","fay","fed","fen","few","fib","fig","fin","fit","fix","fly","foe","fog","fon","fop","for","fro","fry","fub","fun","fur",
    "gab","gad","gap","gas","gay","gel","gem","get","gig","gin","gnu","god","got","gum","gun","gut","guy",
    "had","hag","ham","has","hat","hay","hem","hen","hew","hid","him","hip","his","hit","hoe","hog","hop","hot","how","hub","hug","hum","hut",
    "ice","icy","ill","imp","ink","ion","ire","irk","ivy",
    "jab","jag","jam","jar","jaw","jay","jet","jig","job","jot","joy","jug","jut",
    "keg","ken","key","kid","kin","kit",
    "lab","lad","lag","lap","law","lax","lay","lea","leg","let","lid","lip","lit","log","lot","low",
    "mad","man","map","mar","mat","maw","may","men","met","mew","mid","mob","mod","mop","mud","mug","nab","nag","nap","nay","net","new","nil","nip","nit","nob","nod","nor","not","now","nun","nut",
    "oak","oar","odd","ode","off","oft","oil","old","one","opt","orb","ore","our","out","owe","owl","own",
    "paw","pay","pea","peg","pen","pep","per","pet","pie","pig","pin","pit","ply","pod","pop","pot","pow","pro","pub","pun","pup","pus","put",
    "rag","ram","ran","rap","rat","raw","ray","red","ref","rep","rev","rib","rid","rig","rim","rip","rob","rod","rot","row","rub","rug","rum","run","rut","rye",
    "sac","sad","sag","sap","sat","saw","say","sea","set","sew","sin","sip","sir","sit","six","ski","sky","sly","sob","sod","son","sop","sot","sow","soy","spa","spy","sty","sub","sue","sum","sun","sup",
    "tab","tan","tap","tar","tat","tax","tea","ten","the","thy","tic","tin","tip","toe","ton","too","top","tot","tow","toy","try","tub","tug","two",
    "urn","use",
    "van","via","vie","vim",
    "wad","war","was","way","web","wed","wig","win","wit","woe","wok","won","woo","wry",
    "yam","yap","yaw","yep","yes","yet","yew",
    "zap","zed","zen","zip","zoo",
  
    // 4-letter words
    "able","ably","abut","ache","acid","aged","ages","ague","ahem","aide","aids","ails","aims","airs","airy","ajar","akin","alas","ales","aloe","alps","also","alto","alum","amen","amid","amor","amps","anal","ands","anew","ante","ants","apes","apex","arch","area","aria","arid","army","arty","ashy","atop","aunt","auto","avid","awed","awls","awry","axed","axes","axle","ayes",
    "babe","back","bade","bail","bait","bake","ball","balm","band","bane","bang","bank","bare","bark","barn","bars","base","bash","bask","bath","bats","bawl","bead","beam","bean","bear","beat","beds","beef","been","beep","beer","beet","bell","belt","bend","berm","best","bias","bide","bike","bile","bill","bind","bird","bite","bits","blah","blam","bled","blew","blob","bloc","blog","blow","blue","blur","boar","boat","bode","bold","bole","bolt","bomb","bond","bone","boon","boot","bore","born","bosh","boss","both","bout","brag","bran","brat","brew","brim","brow","buck","buff","bulk","bull","bump","bunk","buoy","burn","burp","burr","bury","bush","busy","buzz",
    "café","cage","cake","calf","call","calm","came","camp","cane","cape","card","care","carp","cart","case","cash","cast","cave","cede","cell","cent","chap","char","chat","chew","chin","chip","chop","chub","chug","chum","cite","clad","clam","clap","claw","clay","clip","clod","clog","clop","club","clue","coal","coat","coax","code","coil","coin","cold","cole","colt","comb","come","cone","cook","cool","cope","copy","cord","core","corn","cost","cosy","cots","couch","coup","cove","cozy","crab","cram","crew","crop","crow","crud","cube","cuff","cult","curb","cure","curl","cute",
    "dace","dais","dale","dame","damp","dare","dark","dart","dash","date","dawn","daze","dead","deal","dean","dear","deck","deed","deem","deep","deft","dell","dent","deny","desk","dial","dice","diet","dike","dill","dime","dire","dirk","dirt","disc","dish","disk","diva","dive","dock","dodo","dome","door","dope","dork","dose","dote","dove","down","drab","drag","draw","drew","drip","drop","drum","dual","duel","dung","dunk","dusk","dust","duty",
    "each","earl","earn","ease","east","edgy","edit","emit","epic","even","ever","evil","exam","exit",
    "face","fact","fade","fail","fair","fake","fall","fame","fang","fare","farm","fast","fate","fawn","faze","fear","feat","feed","feel","feet","fell","felt","fend","fern","feud","fief","fill","film","find","fine","fire","firm","fish","fist","five","flag","flak","flan","flap","flat","flaw","flea","fled","flex","flip","flit","flow","foam","fold","folk","fond","font","fool","foot","ford","fore","fork","form","fort","foul","fowl","frag","fray","free","fret","frog","from","fuel","full","fund","funk","fuse","fuss",
    "gale","gall","game","gang","gape","gash","gate","gave","gawk","gaze","gear","gent","germ","gibe","gild","gill","give","glad","glee","glen","glib","glob","glow","glum","goad","goal","goat","gold","golf","goon","gore","gosh","gown","grab","grad","gram","gray","grew","grid","grin","grip","grit","grog","grow","grub","gulf","gull","gulp","gunk","guru","gust","guts","guys",
    "hack","hail","hale","half","hall","halt","hand","hang","hank","hard","hare","hark","harm","harp","hash","hate","haul","hawk","haze","hazy","head","heal","heap","heat","heel","helm","help","herd","here","hero","hewn","hide","high","hike","hill","hint","hire","hole","holy","home","hood","hook","hoop","hope","horn","hose","host","hour","hulk","hull","hump","hung","hunt","hurl","husk","hymn",
    "icon","idea","idle","idly","imam","inch","info","iris","isle","itch","item",
    "jack","jade","jail","jest","jibe","jilt","join","joke","jolt","jostle","junk","jury","just",
    "keen","keep","kelp","kick","kill","kind","king","knob","knot","know",
    "lace","lack","laid","lake","lame","lamp","land","lane","lank","lard","lark","lash","last","late","laud","lava","lawn","lazy","leaf","leak","lean","leap","left","lend","lens","less","levy","like","limb","lime","limp","line","link","lion","list","live","load","loam","loan","loft","logo","lone","loom","loon","loop","loot","lore","lorn","lory","loss","lure","lust","lute",
    "mace","made","main","make","mall","mane","many","mare","mark","mars","mast","math","maze","mead","meal","mean","meat","meld","melt","memo","menu","mesh","mice","mike","mild","mile","milk","mill","mind","mine","mint","miss","mist","mite","mode","mole","molt","monk","moon","moor","more","morn","moth","move","muck","muds","mule","mull","murk","musk","must","myth",
    "nail","name","nary","neat","need","nest","next","nice","nick","nine","node","norm","nose","note","noun","nude","numb",
    "oath","oboe","odds","ogre","okay","omen","once","only","ooze","open","orca","oval","oven","over","owed","owls",
    "pace","pack","page","pail","pain","pair","pale","palm","pang","park","part","past","path","pave","pawn","peak","pear","peel","peer","pelt","peon","perk","pest","pick","pier","pile","pine","pink","pint","pipe","plan","plod","plot","plow","ploy","plum","plus","poem","poet","pole","poll","polo","pond","pony","pool","pope","pore","pork","port","pose","post","pour","prey","prod","prop","prow","pull","pulp","pump","pure","push",
    "quit","quiz",
    "race","rack","rage","raid","rail","rain","ramp","rant","rasp","rave","razz","read","real","reap","rear","reed","reel","rely","rend","rent","rest","rice","rich","ride","rife","rift","ring","riot","rise","risk","rite","road","roam","roar","robe","rock","role","roll","roof","room","root","rope","rose","ruin","rule","rush","rust",
    "sack","safe","sage","sale","salt","same","sand","sane","sang","sank","sash","save","scan","scar","seam","seat","sect","seed","seek","self","sell","sent","shed","shin","ship","shoe","shop","shot","shun","shut","sick","side","sift","sign","silk","sill","silo","sine","sing","sink","size","skew","skin","skip","slam","slap","slat","slaw","sled","slew","slid","slim","slip","slit","slop","slow","slug","slum","slur","smug","snap","snob","snug","soak","soar","sock","soft","soil","sole","solo","some","song","soon","soot","sore","sort","soul","soup","sour","span","spar","spit","spot","spur","stab","stag","star","stay","stem","step","stir","stop","stow","stub","stud","stun","suck","suit","sulk","sump","sung","sunk","sure","surf","swan","swap","swat","sway","swim","swum",
    "tack","tame","tank","tare","tarp","taut","taxi","teak","teal","team","tear","tech","term","text","than","thaw","them","then","thou","thus","tide","tidy","tier","till","time","tine","tire","toga","toll","tomb","tome","tong","tool","toot","torn","toss","tour","town","trap","tray","tree","trim","trio","trip","trod","troop","trot","true","tube","tuck","tuft","tuna","tune","turf","twin","type",
    "ugly","undo","upon","used","user",
    "vale","vary","vain","vast","veil","vein","vent","verb","vest","veto","vibe","vice","view","vine","void","volt","vote",
    "wade","wail","wake","walk","wall","wand","wane","warp","wart","wash","wasp","wave","wavy","weak","weal","wean","weep","weld","well","wend","went","were","west","whim","whip","wick","wide","wile","will","wilt","wink","wire","wise","wish","wisp","wits","woke","wolf","womb","wont","wood","word","wore","work","worm","worn","wrap","wren","writ",
    "yank","yard","yarn","year","yell","yoga","yolk","your",
    "zeal","zero","zinc","zone","zoom",
  
    // 5-letter words
    "abbey","abhor","abide","abler","abode","abort","about","above","abuse","acorn","acrid","acted","acute","adapt","adept","admit","adobe","adopt","adult","affix","after","agile","aglow","agony","agree","ahead","aimed","aisle","alarm","album","alert","algae","alien","align","alike","alive","allay","aloft","aloof","aloud","alter","alway","amaze","amber","amble","amend","amiss","ample","amuse","angel","anger","angle","angry","angst","anime","annex","antic","anvil","apart","apple","apply","aptly","argue","arise","armor","aroma","arose","array","arson","artsy","ascot","aside","aspen","asset","atone","attic","audit","augur","avail","avoid","awake","award","aware","awful","awoke",
    "badge","badly","baize","baked","baker","bales","ballet","banjo","baron","basic","basis","batch","bathe","begin","being","belle","bench","birch","birth","black","blade","blame","bland","blaze","bleed","blend","bless","blight","bliss","block","blood","bloom","blown","board","bogus","bonus","booby","booze","bossy","botch","bound","boxer","brace","braid","brain","brake","brand","brass","brave","bread","break","breed","brick","bride","brief","bring","brisk","broad","broke","brook","broth","brush","build","built","bulge","bunch","burnt","burst","buyer",
    "cabin","cacti","camel","candy","cargo","carol","carry","carve","catch","cause","cease","chalk","chaos","charm","chase","cheap","check","cheek","cheer","chest","chief","child","chill","choir","chose","chuck","cider","civic","civil","claim","clang","clash","clasp","clean","clear","clerk","click","cliff","climb","cling","close","cloth","cloud","clump","coast","color","comet","comic","comma","coral","could","count","cover","covet","crack","craft","crave","crawl","craze","crazy","creak","cream","creek","creep","crime","crisp","cross","cruel","crush","crust","curve","cycle",
    "daily","dairy","daisy","dance","decay","decoy","delta","depot","depth","derby","dirty","dizzy","doing","dolor","domino","doubt","dough","dowdy","dowel","draft","drain","drape","dread","dream","dress","dried","drift","drink","drive","drove","dryer","dwell","dying",
    "eager","eagle","early","earth","eight","elite","empty","enemy","enjoy","enter","entry","equal","error","essay","every","exact","extra",
    "fable","faced","facet","faint","faith","fancy","fatal","fault","feast","fence","feral","fetch","fever","field","fiend","fiery","fifth","fifty","filth","final","first","fixed","flame","flash","flesh","float","flock","floor","flour","flute","focal","foggy","folly","force","forge","found","frame","fresh","front","froze","fudge","funny","fuzzy",
    "gauze","gavel","gaudy","giant","given","glade","glare","glass","glide","gloom","gloss","glove","gnome","going","gorge","gourd","grade","grant","grasp","grass","grate","grave","graze","greed","green","greet","grief","grime","grind","groan","grope","gross","grout","grove","growl","guard","guess","guest","guide","guile","guise","gusto",
    "habit","happy","harsh","haven","hazed","heart","heavy","hence","herbs","hinge","hippo","hoist","honor","horse","hotel","hound","house","hover","human","humid","hurry","hyena",
    "idiom","image","imply","index","inner","input","inter","irony","issue","ivory",
    "jaunt","jelly","jewel","joust","judge","juice","juicy","jumbo","jumpy","juror",
    "karma","knack","kneel","knife","knit","knock","known",
    "label","lance","large","laser","later","laugh","layer","leaky","learn","lease","least","leave","ledge","legal","lemon","level","light","limit","linen","liver","local","lodge","logic","loose","lorry","lousy","lower","loyal","lucky","lusty","lying",
    "magic","major","maker","manor","maple","march","marsh","match","mauve","mayor","mealy","meant","medal","mercy","merge","merry","might","minor","minus","mirth","moody","moral","morph","mourn","mousy","mouth","mulch","music","musty","myrrh",
    "naive","naval","noble","noise","north","notch","noted","nurse","nymph",
    "octet","offer","often","olive","omega","onset","opera","orbit","order","other","outer","outdo","ounce","oxide",
    "paint","panic","paper","patch","pause","peace","peach","pearl","penal","perch","petal","petty","phase","phone","photo","piano","pinch","pirate","pitch","pixel","pizza","place","plain","plane","plant","plate","plaza","plead","plush","point","poise","poker","polar","poppy","pouch","pound","power","prank","press","price","prick","pride","prime","print","prior","prize","probe","proof","prose","proud","prove","prune","psalm","pulse","purse","quake",
    "queen","query","quest","queue","quick","quiet","quota","quote",
    "radar","radio","rainy","rally","ranch","range","rapid","ratio","reach","ready","realm","rebel","reedy","refer","reign","relax","remix","repay","repel","repot","reset","reuse","revel","ridge","risky","rival","river","robot","rocky","rodeo","rouge","rough","round","route","rover","royal","rugby","ruler",
    "sadly","saint","salad","sandy","sauce","sauna","scale","scamp","scene","scope","score","seize","sense","serum","serve","seven","shade","shady","shake","shale","shall","shame","shape","share","sharp","shave","shelf","shell","shift","shine","short","shout","shove","sight","sigma","silly","since","sixth","sixty","skill","skull","skunk","slack","slang","slant","slave","sleep","sleeve","slime","slope","smash","smell","smile","smoke","snail","snake","sneak","snow","snowy","solar","solid","solve","sorry","south","space","spare","spark","spawn","spear","speed","spell","spend","spicy","spill","spine","spoke","spoon","spray","squad","squid","stack","staff","stage","stain","stale","stall","stamp","stand","stark","start","stash","state","stead","steal","steam","steel","steep","steer","stern","stick","stiff","still","sting","stock","stomp","stone","stood","stoop","store","storm","story","stout","stove","strap","straw","stray","street","strip","strut","stuck","study","style","sugar","suite","sunny","super","surge","sushi","swamp","sweep","sweet","swept","swirl","sword",
    "tabby","table","talon","taunt","taste","teach","tease","teeth","tepid","terse","thank","thick","think","thorn","those","three","threw","throb","throw","tithe","title","today","token","torch","total","touch","tough","towel","tower","toxic","trace","track","trade","trail","train","trait","tramp","trash","tread","trend","trial","trick","tried","troop","trove","truck","truly","truss","trust","truth","tuber","tulip","tumor","tummy","tweak","tweed","twice","twist","tying",
    "ultra","umbra","uncut","under","undue","unfit","unity","unlit","until","unzip","upset","urban","usurp",
    "vague","valid","value","valve","vault","vicar","video","vigor","villa","visor","vital","vivid","vocal","voice","voila","vowel","vying",
    "wafer","wagon","waltz","waste","watch","water","weary","weave","wedge","weedy","weigh","weird","weave","whale","wheat","wheel","where","while","white","whole","whose","widen","windy","witty","woman","women","woods","world","worry","worse","worst","worth","would","wound","wrath","wring","wrong",
    "yacht","yearn","yield","young","youth",
    "zesty","zilch","zippy",
  
    // 6-letter words
    "absent","absorb","accent","accept","access","accord","across","action","active","actual","adhere","admire","afford","agenda","almost","always","ambush","amount","anchor","animal","annual","answer","anthem","anyway","appear","ardent","around","aspect","assert","astern","attack","attend","august","author","autumn","avenue",
    "backup","barrel","basket","battle","beauty","before","behind","belong","better","beyond","bitter","blight","borrow","bottle","bottom","bounce","bounty","bridge","broken","budget","burden","burrow","button",
    "cactus","camera","cancel","candle","carpet","castle","casual","cattle","caught","cellar","center","change","charge","chaste","cherry","choose","chosen","cinder","circle","classy","clever","client","closet","cobalt","combat","comedy","common","comply","concur","confess","conquer","corner","corpse","costly","couple","course","create","credit","crisis","custom",
    "danger","dapper","dazzle","debate","decent","decide","defend","degree","derive","design","desire","detail","detect","devote","differ","dinner","direct","divide","divine","domain","donkey","dragon","drudge","during","dwells",
    "easily","effect","effort","eighth","either","embody","empire","enable","endure","engage","enough","entity","escape","ethnic","evolve","except","expand","expert","extend",
    "fabric","factor","family","famous","father","figure","finale","finger","finish","forest","forget","formal","foster","fourth","frozen","future",
    "garden","gather","gender","gentle","gesture","global","gluten","golden","govern","growth","guitar",
    "handle","happen","hardly","hatred","health","heaven","height","helmet","hidden","highly","honest","hopeful","hunter","hurdle","hustle",
    "ignore","impact","import","indeed","infant","inform","inland","insane","insect","inside","insist","insure","intake","intend","invest","island",
    "jangle","jungle","junior","justly",
    "kernel","kidnap","kindle","knight",
    "launch","lavish","leader","length","letter","little","losing","lowest","luxury",
    "manage","manner","marble","margin","market","mature","meadow","mental","method","middle","mirror","misery","modern","modest","motion","motive","murder","mutual",
    "narrow","nation","native","nature","nearly","needle","nested","nobody","normal","notice","notion","number",
    "object","obtain","octave","office","oldest","opener","option","orange","origin","outrun","outset","oyster",
    "palace","parent","patent","patrol","pattern","pebble","pencil","people","period","permit","person","pillar","planet","player","plenty","pocket","poetry","poison","police","portal","potato","prefer","pretty","prince","prison","profit","proper","protect","public","purple","puzzle",
    "reason","recall","record","reduce","refine","reform","refuge","refuse","region","render","repeat","rescue","resist","return","reward","rocket","saddle","sample","savage","screen","search","secret","senior","settle","signal","simple","single","sister","slight","smooth","soccer","social","soften","source","speaks","spirit","spread","spring","statue","status","strain","stream","street","strong","submit","sudden","summer","sunset","supply","symbol",
    "talent","tandem","target","tenant","terror","theory","tighten","timber","tissue","throne","thrust","tickle","timely","tinder","toasty","toggle","tongue","travel","triple","tumble","twitch",
    "unable","unique","unlike","update","uptown","useful","utter",
    "valley","vanish","vendor","virtue","vision","visual","volume",
    "walnut","wander","warmth","weapon","wealth","winter","wisdom","wonder","worsen","worthy","writer",
    "yellow","zipper",
  
    // 7-letter words
    "abandon","absence","achieve","acquire","address","advance","against","ancient","another","anxious","attempt","attract","average","balance","believe","benefit","between","breathe","brother","cabinet","capture","careful","certain","channel","chapter","charity","culture","curious","current","cushion","defense","deposit","develop","digital","display","distant","diverse","evening","example","explore","extreme","fantasy","feature","fertile","freedom","general","genuine","gesture","however","imagine","improve","include","inherit","journey","kingdom","knowing","leather","leisure","liberty","mention","message","million","miracle","mistake","morning","mystery","nothing","obscure","obvious","opinion","outside","passage","pattern","perfect","perhaps","picture","popular","portion","popular","present","private","process","product","project","promise","protect","provide","purpose","realize","receive","recover","release","replace","require","respect","restore","science","section","similar","society","soldier","someone","somehow","special","sponsor","station","subject","success","suppose","surface","teacher","through","tonight","trouble","unclear","unusual","venture","version","village","western","whether","without","writing",
  
    // 8-letter words
    "absolute","accident","account","accurate","activity","actually","anything","anywhere","approach","artistic","attitude","audience","backward","becoming","business","calendar","campaign","changing","children","complete","consider","continue","creative","criminal","daughter","describe","disagree","discover","distance","dominant","dominate","educated","electric","everyone","evidence","frequent","generate","graceful","grateful","greatest","homeless","indicate","industry","instance","interact","material","neighbor","opposite","ordinary","organize","overcome","planning","pleasure","possible","positive","powerful","practice","precious","presence","probable","progress","property","proposal","province","purchase","question","rational","reaction","remember","resource","response","schedule","seasonal","security","separate","sequence","strength","struggle","suitable","thousand","together","tomorrow","ultimate","universe","vacation","violence","whatever","whenever","wherever","yourself",
  ]);
  
  /**
   * Given a string of letters, return all valid English words that can be formed.
   */
  export function findWords(letters) {
    if (!letters || letters.trim().length === 0) return [];
    
    const clean = letters.toLowerCase().replace(/[^a-z]/g, '');
    if (clean.length < 2) return [];
  
    const letterCounts = {};
    for (const ch of clean) {
      letterCounts[ch] = (letterCounts[ch] || 0) + 1;
    }
  
    const results = [];
    for (const word of WORD_LIST) {
      if (word.length < 2 || word.length > clean.length) continue;
      if (canForm(word, letterCounts)) {
        results.push(word);
      }
    }
  
    // Sort: longer words first, then alphabetically
    results.sort((a, b) => b.length - a.length || a.localeCompare(b));
    return results;
  }
  
  function canForm(word, letterCounts) {
    const used = {};
    for (const ch of word) {
      used[ch] = (used[ch] || 0) + 1;
      if ((used[ch] || 0) > (letterCounts[ch] || 0)) return false;
    }
    return true;
  }