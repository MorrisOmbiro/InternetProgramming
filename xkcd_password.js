"use strict";

var xkcd_pw_gen_server_hash = "183f06429da893ab7ea80e26a5410fa560e5b618";
// global word dictionary 
var dict = [
"ability","able","aboard","about","above","accept","accident","according",
"account","accurate","acres","across","act","action","active","activity",
"actual","actually","add","addition","additional","adjective","adult","adventure",
"advice","affect","afraid","after","afternoon","again","against","age",
"ago","agree","ahead","aid","air","airplane","alike","alive",
"all","allow","almost","alone","along","aloud","alphabet","already",
"also","although","am","among","amount","ancient","angle","angry",
"animal","announced","another","answer","ants","any","anybody","anyone",
"anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
"appropriate","are","area","arm","army","around","arrange","arrangement",
"arrive","arrow","art","article","as","aside","ask","asleep",
"at","ate","atmosphere","atom","atomic","attached","attack","attempt",
"attention","audience","author","automobile","available","average","avoid","aware",
"away","baby","back","bad","badly","bag","balance","ball",
"balloon","band","bank","bar","bare","bark","barn","base",
"baseball","basic","basis","basket","bat","battle","be","bean",
"bear","beat","beautiful","beauty","became","because","become","becoming",
"bee","been","before","began","beginning","begun","behavior","behind",
"being","believed","bell","belong","below","belt","bend","beneath",
"bent","beside","best","bet","better","between","beyond","bicycle",
"bigger","biggest","bill","birds","birth","birthday","bit","bite",
"black","blank","blanket","blew","blind","block","blood","blow",
"blue","board","boat","body","bone","book","border","born",
"both","bottle","bottom","bound","bow","bowl","box","boy",
"brain","branch","brass","brave","bread","break","breakfast","breath",
"breathe","breathing","breeze","brick","bridge","brief","bright","bring",
"broad","broke","broken","brother","brought","brown","brush","buffalo",
"build","building","built","buried","burn","burst","bus","bush",
"business","busy","but","butter","buy","by","cabin","cage",
"cake","call","calm","came","camera","camp","can","canal",
"cannot","cap","capital","captain","captured","car","carbon","card",
"care","careful","carefully","carried","carry","case","cast","castle",
"cat","catch","cattle","caught","cause","cave","cell","cent",
"center","central","century","certain","certainly","chain","chair","chamber",
"chance","change","changing","chapter","character","characteristic","charge","chart",
"check","cheese","chemical","chest","chicken","chief","child","children",
"choice","choose","chose","chosen","church","circle","circus","citizen",
"city","class","classroom","claws","clay","clean","clear","clearly",
"climate","climb","clock","close","closely","closer","cloth","clothes",
"clothing","cloud","club","coach","coal","coast","coat","coffee",
"cold","collect","college","colony","color","column","combination","combine",
"come","comfortable","coming","command","common","community","company","compare",
"compass","complete","completely","complex","composed","composition","compound","concerned",
"condition","congress","connected","consider","consist","consonant","constantly","construction",
"contain","continent","continued","contrast","control","conversation","cook","cookies",
"cool","copper","copy","corn","corner","correct","correctly","cost",
"cotton","could","count","country","couple","courage","course","court",
"cover","cow","cowboy","crack","cream","create","creature","crew",
"crop","cross","crowd","cry","cup","curious","current","curve",
"customs","cut","cutting","daily","damage","dance","danger","dangerous",
"dark","darkness","date","daughter","dawn","day","dead","deal",
"dear","death","decide","declared","deep","deeply","deer","definition",
"degree","depend","depth","describe","desert","design","desk","detail",
"determine","develop","development","diagram","diameter","did","die","differ",
"difference","different","difficult","difficulty","dig","dinner","direct","direction",
"directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
"disease","dish","distance","distant","divide","division","do","doctor",
"does","dog","doing","doll","dollar","done","donkey","door",
"dot","double","doubt","down","dozen","draw","drawn","dream",
"dress","drew","dried","drink","drive","driven","driver","driving",
"drop","dropped","drove","dry","duck","due","dug","dull",
"during","dust","duty","each","eager","ear","earlier","early",
"earn","earth","easier","easily","east","easy","eat","eaten",
"edge","education","effect","effort","egg","eight","either","electric",
"electricity","element","elephant","eleven","else","empty","end","enemy",
"energy","engine","engineer","enjoy","enough","enter","entire","entirely",
"environment","equal","equally","equator","equipment","escape","especially","essential",
"establish","even","evening","event","eventually","ever","every","everybody",
"everyone","everything","everywhere","evidence","exact","exactly","examine","example",
"excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
"exist","expect","experience","experiment","explain","explanation","explore","express",
"expression","extra","eye","face","facing","fact","factor","factory",
"failed","fair","fairly","fall","fallen","familiar","family","famous",
"far","farm","farmer","farther","fast","fastened","faster","fat",
"father","favorite","fear","feathers","feature","fed","feed","feel",
"feet","fell","fellow","felt","fence","few","fewer","field",
"fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
"film","final","finally","find","fine","finest","finger","finish",
"fire","fireplace","firm","first","fish","five","fix","flag",
"flame","flat","flew","flies","flight","floating","floor","flow",
"flower","fly","fog","folks","follow","food","foot","football",
"for","force","foreign","forest","forget","forgot","forgotten","form",
"former","fort","forth","forty","forward","fought","found","four",
"fourth","fox","frame","free","freedom","frequently","fresh","friend",
"friendly","frighten","frog","from","front","frozen","fruit","fuel",
"full","fully","fun","function","funny","fur","furniture","further",
"future","gain","game","garage","garden","gas","gasoline","gate",
"gather","gave","general","generally","gentle","gently","get","getting",
"giant","gift","girl","give","given","giving","glad","glass",
"globe","go","goes","gold","golden","gone","good","goose",
"got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
"graph","grass","gravity","gray","great","greater","greatest","greatly",
"green","grew","ground","group","grow","grown","growth","guard",
"guess","guide","gulf","gun","habit","had","hair","half",
"halfway","hall","hand","handle","handsome","hang","happen","happened",
"happily","happy","harbor","hard","harder","hardly","has","hat",
"have","having","hay","he","headed","heading","health","heard",
"hearing","heart","heat","heavy","height","held","hello","help",
"helpful","her","herd","here","herself","hidden","hide","high",
"higher","highest","highway","hill","him","himself","his","history",
"hit","hold","hole","hollow","home","honor","hope","horn",
"horse","hospital","hot","hour","house","how","however","huge",
"human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
"hurt","husband","ice","idea","identity","if","ill","image",
"imagine","immediately","importance","important","impossible","improve","in","inch",
"include","including","income","increase","indeed","independent","indicate","individual",
"industrial","industry","influence","information","inside","instance","instant","instead",
"instrument","interest","interior","into","introduced","invented","involved","iron",
"is","island","it","its","itself","jack","jar","jet",
"job","join","joined","journey","joy","judge","jump","jungle",
"just","keep","kept","key","kids","kill","kind","kitchen",
"knew","knife","know","knowledge","known","label","labor","lack",
"lady","laid","lake","lamp","land","language","large","larger",
"largest","last","late","later","laugh","law","lay","layers",
"lead","leader","leaf","learn","least","leather","leave","leaving",
"led","left","leg","length","lesson","let","letter","level",
"library","lie","life","lift","light","like","likely","limited",
"line","lion","lips","liquid","list","listen","little","live",
"living","load","local","locate","location","log","lonely","long",
"longer","look","loose","lose","loss","lost","lot","loud",
"love","lovely","low","lower","luck","lucky","lunch","lungs",
"lying","machine","machinery","mad","made","magic","magnet","mail",
"main","mainly","major","make","making","man","managed","manner",
"manufacturing","many","map","mark","market","married","mass","massage",
"master","material","mathematics","matter","may","maybe","me","meal",
"mean","means","meant","measure","meat","medicine","meet","melted",
"member","memory","men","mental","merely","met","metal","method",
"mice","middle","might","mighty","mile","military","milk","mill",
"mind","mine","minerals","minute","mirror","missing","mission","mistake",
"mix","mixture","model","modern","molecular","moment","money","monkey",
"month","mood","moon","more","morning","most","mostly","mother",
"motion","motor","mountain","mouse","mouth","move","movement","movie",
"moving","mud","muscle","music","musical","must","my","myself",
"mysterious","nails","name","nation","national","native","natural","naturally",
"nature","near","nearby","nearer","nearest","nearly","necessary","neck",
"needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
"never","new","news","newspaper","next","nice","night","nine",
"no","nobody","nodded","noise","none","noon","nor","north",
"nose","not","note","noted","nothing","notice","noun","now",
"number","numeral","nuts","object","observe","obtain","occasionally","occur",
"ocean","of","off","offer","office","officer","official","oil",
"old","older","oldest","on","once","one","only","onto",
"open","operation","opinion","opportunity","opposite","or","orange","orbit",
"order","ordinary","organization","organized","origin","original","other","ought",
"our","ourselves","out","outer","outline","outside","over","own",
"owner","oxygen","pack","package","page","paid","pain","paint",
"pair","palace","pale","pan","paper","paragraph","parallel","parent",
"park","part","particles","particular","particularly","partly","parts","party",
"pass","passage","past","path","pattern","pay","peace","pen",
"pencil","people","per","percent","perfect","perfectly","perhaps","period",
"person","personal","pet","phrase","physical","piano","pick","picture",
"pictured","pie","piece","pig","pile","pilot","pine","pink",
"pipe","pitch","place","plain","plan","plane","planet","planned",
"planning","plant","plastic","plate","plates","play","pleasant","please",
"pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
"point","pole","police","policeman","political","pond","pony","pool",
"poor","popular","population","porch","port","position","positive","possible",
"possibly","post","pot","potatoes","pound","pour","powder","power",
"powerful","practical","practice","prepare","present","president","press","pressure",
"pretty","prevent","previous","price","pride","primitive","principal","principle",
"printed","private","prize","probably","problem","process","produce","product",
"production","program","progress","promised","proper","properly","property","protection",
"proud","prove","provide","public","pull","pupil","pure","purple",
"purpose","push","put","putting","quarter","queen","question","quick",
"quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
"rain","raise","ran","ranch","range","rapidly","rate","rather",
"raw","rays","reach","read","reader","ready","real","realize",
"rear","reason","recall","receive","recent","recently","recognize","record",
"red","refer","refused","region","regular","related","relationship","religious",
"remain","remarkable","remember","remove","repeat","replace","replied","report",
"represent","require","research","respect","rest","result","return","review",
"rhyme","rhythm","rice","rich","ride","riding","right","ring",
"rise","rising","river","road","roar","rock","rocket","rocky",
"rod","roll","roof","room","root","rope","rose","rough",
"round","route","row","rubbed","rubber","rule","ruler","run",
"running","rush","sad","saddle","safe","safety","said","sail",
"sale","salmon","salt","same","sand","sang","sat","satellites",
"satisfied","save","saved","saw","say","scale","scared","scene",
"school","science","scientific","scientist","score","screen","sea","search",
"season","seat","second","secret","section","see","seed","seeing",
"seems","seen","seldom","select","selection","sell","send","sense",
"sent","sentence","separate","series","serious","serve","service","sets",
"setting","settle","settlers","seven","several","shade","shadow","shake",
"shaking","shall","shallow","shape","share","sharp","she","sheep",
"sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
"shoe","shoot","shop","shore","short","shorter","shot","should",
"shoulder","shout","show","shown","shut","sick","sides","sight",
"sign","signal","silence","silent","silk","silly","silver","similar",
"simple","simplest","simply","since","sing","single","sink","sister",
"sit","sitting","situation","six","size","skill","skin","sky",
"slabs","slave","sleep","slept","slide","slight","slightly","slip",
"slipped","slope","slow","slowly","small","smaller","smallest","smell",
"smile","smoke","smooth","snake","snow","so","soap","social",
"society","soft","softly","soil","solar","sold","soldier","solid",
"solution","solve","some","somebody","somehow","someone","something","sometime",
"somewhere","son","song","soon","sort","sound","source","south",
"southern","space","speak","special","species","specific","speech","speed",
"spell","spend","spent","spider","spin","spirit","spite","split",
"spoken","sport","spread","spring","square","stage","stairs","stand",
"standard","star","stared","start","state","statement","station","stay",
"steady","steam","steel","steep","stems","step","stepped","stick",
"stiff","still","stock","stomach","stone","stood","stop","stopped",
"store","storm","story","stove","straight","strange","stranger","straw",
"stream","street","strength","stretch","strike","string","strip","strong",
"stronger","struck","structure","struggle","stuck","student","studied","studying",
"subject","substance","success","successful","such","sudden","suddenly","sugar",
"suggest","suit","sum","summer","sun","sunlight","supper","supply",
"support","suppose","sure","surface","surprise","surrounded","swam","sweet",
"swept","swim","swimming","swing","swung","syllable","symbol","system",
"table","tail","take","taken","tales","talk","tall","tank",
"tape","task","taste","taught","tax","tea","teach","teacher",
"team","tears","teeth","telephone","television","tell","temperature","ten",
"tent","term","terrible","test","than","thank","that","thee",
"them","themselves","then","theory","there","therefore","these","they",
"thick","thin","thing","think","third","thirty","this","those",
"thou","though","thought","thousand","thread","three","threw","throat",
"through","throughout","throw","thrown","thumb","thus","thy","tide",
"tie","tight","tightly","till","time","tin","tiny","tip",
"tired","title","to","tobacco","today","together","told","tomorrow",
"tone","tongue","tonight","too","took","tool","top","topic",
"torn","total","touch","toward","tower","town","toy","trace",
"track","trade","traffic","trail","train","transportation","trap","travel",
"treated","tree","triangle","tribe","trick","tried","trip","troops",
"tropical","trouble","truck","trunk","truth","try","tube","tune",
"turn","twelve","twenty","twice","two","type","typical","uncle",
"under","underline","understanding","unhappy","union","unit","universe","unknown",
"unless","until","unusual","up","upon","upper","upward","us",
"use","useful","using","usual","usually","valley","valuable","value",
"vapor","variety","various","vast","vegetable","verb","vertical","very",
"vessels","victory","view","village","visit","visitor","voice","volume",
"vote","vowel","voyage","wagon","wait","walk","wall","want",
"war","warm","warn","was","wash","waste","watch","water",
"wave","way","we","weak","wealth","wear","weather","week",
"weigh","weight","welcome","well","went","were","west","western",
"wet","whale","what","whatever","wheat","wheel","when","whenever",
"where","wherever","whether","which","while","whispered","whistle","white",
"who","whole","whom","whose","why","wide","widely","wife",
"wild","will","willing","win","wind","window","wing","winter",
"wire","wise","wish","with","within","without","wolf","women",
"won","wonder","wonderful","wood","wooden","wool","word","wore",
"work","worker","world","worried","worry","worse","worth","would",
"wrapped","write","writer","writing","written","wrong","wrote","yard",
"year","yellow","yes","yesterday","yet","you","young","younger",
"your","yourself","youth","zero","zoo"
]; 
var verbs = ["accept", "add", "admire", "admit", "advise", "afford", "agree", 
             "alert", "allow", "amuse", "analyse", "announce", "annoy", "answer", 
             "apologise", "appear", "applaud", "appreciate", "approve", "argue", 
             "arrange", "arrest", "arrive", "ask", "attach", "attack", "attempt", 
             "attend", "attract", "avoid", "back", "bake", "balance", "ban", "bang", 
             "bare", "bat", "bathe", "battle", "beam", "beg", "behave", "belong", 
             "bleach", "bless", "blind", "blink", "blot", "blush", "boast", "boil",
             "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", 
             "brake", "branch", "breathe", "bruise", "brush", "bubble", "bump", 
             "burn", "bury", "buzz", "calculate", "call", "camp", "care", "carry", 
             "carve", "cause", "challenge", "change", "charge", "chase", "cheat", 
             "check", "cheer", "chew", "choke", "chop", "claim", "clap", "clean", 
             "clear", "clip", "close", "coach", "coil", "collect", "colour", "comb", 
             "command", "communicate", "compare", "compete", "complain", "complete", 
             "concentrate", "concern", "confess", "confuse", "connect", "consider",
             "consist", "contain", "continue", "copy", "correct", "cough", "count", 
             "cover", "crack", "crash", "crawl", "cross", "crush", "cry", "cure", "curl", "curve", "cycle", "dam", "damage", "dance", "dare", "decay", "deceive", "decide", "decorate", "delay", "delight", "deliver", "depend", "describe", "desert", "deserve", "destroy", "detect", "develop", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "divide", "double", "doubt", "drag", "drain", "dream", "dress", "drip",
             "drop", "drown", "drum", "dry", "dust", "earn", "educate", "embarrass", 
             "employ", "empty", "encourage", "end", "enjoy", "enter", "entertain", 
             "escape", "examine", "excite", "excuse", "exercise", "exist", "expand",
             "expect", "explain", "explode", "extend", "face", "fade", "fail", 
             "fancy", "fasten", "fax", "fear", "fence", "fetch", "file", "fill", "film", "fire", "fit", "fix", "flap", "flash", "float", "flood", "flow", "flower", "fold", "follow", "fool", "force", "form", "found", "frame", "frighten", "fry", "gather", "gaze", "glow", "glue", "grab", "grate", "grease", "greet", "grin", "grip", "groan", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "heat", "help", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", "hurry", "identify", "ignore", "imagine", "impress", "improve", "include", "increase", "influence", "inform", "inject", "injure", "instruct", "intend", "interest", "interfere", "interrupt", "introduce", "invent", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "label", "land", "last", "laugh", "launch", "learn", "level", "license", "lick", "lie", "lighten", "like", "list", "listen", "live", "load", "lock", "long", "look", "love", "man", "manage", "march", "mark", "marry", "match", "mate", "matter", "measure", "meddle", "melt", "memorise", "mend", "mess up", "milk", "mine", "miss", "mix", "moan", "moor", "mourn", "move", "muddle", "mug", "multiply", "murder", "nail", "name", "need", "nest", "nod", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "open", "order", "overflow", "owe", "own", "pack", "paddle", "paint", "park", "part", "pass", "paste", "pat", "pause", "peck", "pedal", "peel", "peep", "perform", "permit", "phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "please", "plug", "point", "poke", "polish", "pop", "possess", "post", "pour", "practise", "pray", "preach", "precede", "prefer", "prepare", "present", "preserve", "press", "pretend", "prevent", "prick", "print", "produce", "program", "promise", "protect", "provide", "pull", "pump", "punch", "puncture", "punish", "push", "question", "queue", "race", "radiate", "rain", "raise", "reach", "realise", "receive", "recognise", "record", "reduce", "reflect", "refuse", "regret", "reign", "reject", "rejoice", "relax", "release", "rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", "report", "reproduce", "request", "rescue", "retire", "return", "rhyme", "rinse", "risk", "rob", "rock", "roll", "rot", "rub", "ruin", "rule", "rush", "sack", "sail", "satisfy", "save", "saw", "scare", "scatter", "scold", "scorch", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "separate", "serve", "settle", "shade", "share", "shave", "shelter", "shiver", "shock", "shop", "shrug", "sigh", "sign", "signal", "sin", "sip", "ski", "skip", "slap", "slip", "slow", "smash", "smell", "smile", "smoke", "snatch", "sneeze", "sniff", "snore", "snow", "soak", "soothe", "sound", "spare", "spark", "sparkle", "spell", "spill", "spoil", "spot", "spray", "sprout", "squash", "squeak", "squeal", "squeeze", "stain", "stamp", "stare", "start", "stay", "steer", "step", "stir", "stitch", "stop", "store", "strap", "strengthen", "stretch", "strip", "stroke", "stuff", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "switch", "talk", "tame", "tap", "taste", "tease", "telephone", "tempt", "terrify", "test", "thank", "thaw", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transport", "trap", "travel", "treat", "tremble", "trick", "trip", "trot", "trouble", "trust", "try", "tug", "tumble", "turn", "twist", "type", "undress", "unfasten", "unite", "unlock", "unpack", "untidy", "use", "vanish", "visit", "wail", "wait", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "weigh", "welcome", "whine", "whip", "whirl", "whisper", "whistle", "wink", "wipe", "wish", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "x-ray", "yawn", "yell", "zip", "zoom"];
var nouns = ["accelerator", "accordion", "account", "accountant", "acknowledgment", 
             "acoustic", "acrylic", "act", "action", "active", "activity", "actor", 
             "actress", "adapter", "addition", "address", "adjustment", "adult", 
             "advantage", "advertisement", "advice", "afghanistan", "africa",
             "aftermath", "afternoon", "aftershave", "afterthought", "age", 
             "agenda", "agreement", "air", "airbus", "airmail", "airplane", 
             "airport", "airship", "alarm", "albatross", "alcohol", "algebra", 
             "algeria", "alibi", "alley", "alligator", "alloy", "almanac", 
             "alphabet", "alto", "aluminium", "aluminum", "ambulance", "america", 
             "amount", "amusement", "anatomy", "anethesiologist", "anger", 
             "angle", "angora", "animal", "anime", "ankle", "answer", "ant", 
             "antarctica", "anteater", "antelope", "anthony", "anthropology", 
             "apartment", "apology", "apparatus", "apparel", "appeal", "appendix",
             "apple", "appliance", "approval", "april", "aquarius", "arch", 
             "archaeology", "archeology", "archer", "architecture", "area",
             "argentina", "argument", "aries", "arithmetic", "arm", "armadillo",
             "armchair", "armenian", "army", "arrow", "art", "ash", "ashtray",
             "asia", "asparagus", "asphalt", "asterisk", "astronomy", "athlete",
             "atm", "atom", "attack", "attempt", "attention", "attic", "attraction", "august", 
             "aunt", "australia", "australian", "author", "authorisation", "authority", 
             "authorization", "avenue", "babies", "baboon", "baby", "back", "backbone", 
             "bacon", "badge", "badger", "bag", "bagel", "bagpipe", "bail", "bait", "baker", 
             "bakery", "balance", "balinese", "ball", "balloon", "bamboo", "banana", "band", "bandana", "bangladesh", "bangle", 
             "banjo", "bank", "bankbook", "banker", "bar", "barbara", "barber", "barge", 
             "baritone", "barometer", "base", "baseball", "basement", "basin", "basket", 
             "basketball", "bass", "bassoon", "bat", "bath", "bathroom", "bathtub",
             "battery", "battle", "bay", "beach", "bead", "beam", "bean", "bear", 
             "beard", "beast", "beat", "beautician", "beauty", "beaver", 
             "bed", "bedroom", "bee", "beech", "beef", "beer", "beet", "beetle", "beggar", 
             "beginner", "begonia", "behavior", "belgian", "belief", "believe", "bell", "belt",
             "bench", "bengal", "beret", "berry", "bestseller", "betty", "bibliography", "bicycle", 
             "bike", "bill", "billboard", "biology", "biplane", "birch", "bird", "birth", "birthday", 
             "bit", 
             "bite", "black", "bladder", "blade", "blanket", "blinker", "blizzard", "block", "blood",
             "blouse", "blow", "blowgun", "blue", "board", "boat", "bobcat", "body", "bolt", "bomb", 
             "bomber", "bone", "bongo", "bonsai", "book", "bookcase", "booklet", "boot", "border", 
             "botany", "bottle", "bottom", "boundary", "bow", "bowl", "bowling", "box", "boy", "bra",
             "brace", "bracket", "brain", "brake", "branch", "brand", "brandy", "brass", "brazil", 
             "bread", "break", "breakfast", "breath", "brian", "brick", "bridge", "british", "broccoli",
             "brochure", "broker", "bronze", "brother", "brother-in-law", "brow", "brown", "brush", 
             "bubble", "bucket", "budget", "buffer", "buffet", "bugle", "building", "bulb", 
             "bull", "bulldozer", "bumper", "bun", "burglar", "burma", "burn", "burst", "bus", "bush", 
             "business", "butane", "butcher", "butter", "button", "buzzard", "c-clamp", "cabbage", 
             "cabinet", "cable", "cactus", "cafe", "cake", "calculator", "calculus", "calendar", 
             "calf", "call", "camel", "camera", "camp", "can", "canada", "canadian", "cancer", 
             "candle", "cannon", "canoe", "canvas", "cap", "capital", "cappelletti", "capricorn", 
             "captain", "caption", "car", "caravan", "carbon", "card", "cardboard", "cardigan", 
             "care", "carnation", "carol", "carp", "carpenter", "carriage", "carrot", "cart", 
             "cartoon", "case", "cast", "castanet", "cat", "catamaran", "caterpillar", "cathedral",
             "catsup", "cattle", "cauliflower", "cause", "caution", "cave", "cd", "ceiling", "celery", "celeste", "cell", "cellar", "cello", "celsius", "cement", "cemetery", "cent", "centimeter", "century", "ceramic", "cereal", "certification", "chain", "chair", "chalk", "chance", "change", "channel", "character", "chard", "charles", "chauffeur", "check", "cheek", "cheese", "cheetah", "chef", "chemistry", "cheque", "cherries", "cherry", "chess", "chest", "chick", "chicken", "chicory", "chief", "child", "children", "chill", "chime", "chimpanzee", "chin", "china", "chinese", "chive", "chocolate", "chord", "christmas", "christopher", "chronometer", "church", "cicada", "cinema", "circle", "circulation", "cirrus", "citizenship", "city", "clam", "clarinet", "class", "claus", "clave", "clef", "clerk", "click", "client", "climb", "clipper", "cloakroom", "clock", "close", "closet", "cloth", "cloud", "cloudy", "clover", "club", "clutch", "coach", "coal", "coast", "coat", "cobweb", "cockroach", "cocktail", "cocoa", "cod", "coffee", "coil", "coin", "coke", "cold", "collar", "college", "collision", "colombia", "colon", "colony", "color", "colt", "column", "columnist", "comb", "comfort", "comic", "comma", "command", "commission", "committee", "community", "company", "comparison", "competition", "competitor", "composer", "composition", "computer", "condition", "condor", "cone", "confirmation", "conga", "congo", "conifer", "connection", "consonant", "continent", "control", "cook", "cooking", "copper", "copy", "copyright", "cord", "cork", "cormorant", "corn", "cornet", "correspondent", "cost", "cotton", "couch", "cougar", "cough", "country", "course", "court", "cousin", "cover", "cow", "cowbell", "crab", "crack", "cracker", "craftsman", "crate", "crawdad", "crayfish", "crayon", "cream", "creator", "creature", "credit", "creditor", "creek", "crib", "cricket", "crime", "criminal", "crocodile", "crocus", "croissant", "crook", "crop", "cross", "crow", "crowd", "crown", "crush", "cry", "cub", "cuban", "cucumber", "cultivator", "cup", "cupboard", "cupcake", "curler", "currency", "current", "curtain", "curve", "cushion", "custard", "customer", "cut", "cuticle", "cycle", "cyclone", "cylinder", "cymbal", "dad", "daffodil", "dahlia", "daisy", "damage", "dance", "dancer", "danger", "daniel", "dash", "dashboard", "database", "date", "daughter", "david", "day", "dead", "deadline", "deal", "death", "deborah", "debt", "debtor", "decade", "december", "decimal", "decision", "decrease", "dedication", "deer", "defense", "deficit", "degree", "delete", "delivery", "den", "denim", "dentist", "deodorant", "department", "deposit", "description", "desert", "design", "desire", "desk", "dessert", "destruction", "detail", "detective", "development", "dew", "diamond", "diaphragm", "dibble", "dictionary", "dietician", "difference", "digestion", "digger", "digital", "dill", "dime", "dimple", "dinghy", "dinner", "dinosaur", "diploma", "dipstick", "direction", "dirt", "disadvantage", "discovery", "discussion", "disease", "disgust", "dish", "distance", "distribution", "distributor", "diving", "division", "divorced", "dock", "doctor", "dog", "dogsled", "doll", "dollar", "dolphin", "domain", "donald", "donkey", "donna", "door", "dorothy", "double", "doubt", "downtown", "dragon", "dragonfly", "drain", "drake", "drama", "draw", "drawbridge", "drawer", "dream", "dredger", "dress", "dresser", "dressing", "drill", "drink", "drive", "driver", "driving", "drizzle", "drop", "drug", "drum", "dry", "dryer", "duck", "duckling", "dugout", "dungeon", "dust", "eagle", "ear", "earth", "earthquake", "ease", "east", "edge", "edger", "editor", "editorial", "education", "edward", "eel", "effect", "egg", "eggnog", "eggplant", "egypt", "eight", "elbow", "element", "elephant", "elizabeth", "ellipse", "emery", "employee", "employer", "encyclopedia", "end", "enemy", "energy", "engine", "engineer", "engineering", "english", "enquiry", "entrance", "environment", "epoch", "epoxy", "equinox", "equipment", "era", "error", "estimate", "ethernet", "ethiopia", "euphonium", "europe", "evening", "event", "ex-husband", "ex-wife", "examination", "example", "exchange", "exclamation", "exhaust", "existence", "expansion", "experience", "expert", "explanation", "eye", "eyebrow", "eyelash", "eyeliner", "face", "facilities", "fact", "factory", "fahrenheit", "fairies", "fall", "family", "fan", "fang", "farm", "farmer", "fat", "father", "father-in-law", "faucet", "fear", "feast", "feather", "feature", "february", "fedelini", "feedback", "feeling", "feet", "felony", "female", "fender", "ferry", "ferryboat", "fertilizer", "fiber", "fiberglass", "fibre", "fiction", "field", "fifth", "fight", "fighter", "file", "find", "fine", "finger", "fir", "fire", "fired", "fireman", "fireplace", "firewall", "fish", "fisherman", "flag", "flame", "flare", "flat", "flavor", "flax", "flesh", "flight", "flock", "flood", "floor", "flower", "flugelhorn", "flute", "fly", "foam", "fog", "fold", "font", "food", "foot", "football", "footnote", "force", "forecast", "forehead", "forest", "forgery", "fork", "form", "format", "fortnight", "foundation", "fountain", "fowl", "fox", "foxglove", "fragrance", "frame", "france", "freckle", "freeze", "freezer", "freighter", "french", "freon", "friction", "friday", "fridge", "friend", "frog", "front", "frost", "frown", "fruit", "fuel", "fur", "furniture", "galley", "gallon", "game", "gander", "garage", "garden", "garlic", "gas", "gasoline", "gate", "gateway", "gauge", "gazelle", "gear", "gearshift", "geese", "gemini", "gender", "geography", "geology", "geometry", "george", "geranium", "german", "germany", "ghana", "ghost", "giant", "giraffe", "girdle", "girl", "gladiolus", "glass", "glider", "gliding", "glockenspiel", "glove", "glue", "goal", "goat", "gold", "goldfish", "golf", "gondola", "gong", "good-bye", "goose", "gore-tex", "gorilla", "gosling", "government", "governor", "grade", "grain", "gram", "granddaughter", "grandfather", "grandmother", "grandson", "grape", "graphic", "grass", "grasshopper", "gray", "grease", "great-grandfather", "great-grandmother", "greece", "greek", "green", "grenade", "grey", "grill", "grip", "ground", "group", "grouse", "growth", "guarantee", "guatemalan", "guide", "guilty", "guitar", "gum", "gun", "gym", "gymnast", "hacksaw", "hail", "hair", "haircut", "half-brother", "half-sister", "halibut", "hall", "hallway", "hamburger", "hammer", "hamster", "hand", "handball", "handicap", "handle", "handsaw", "harbor", "hardboard", "hardcover", "hardhat", "hardware", "harmonica", "harmony", "harp", "hat", "hate", "hawk", "head", "headlight", "headline", "health", "hearing", "heart", "heat", "heaven", "hedge", "height", "helen", "helicopter", "helium", "hell", "helmet", "help", "hemp", "hen", "heron", "herring", "hexagon", "hill", "himalayan", "hip", "hippopotamus", "history", "hobbies", "hockey", "hoe", "hole", "holiday", "home", "honey", "hood", "hook", "hope", "horn", "horse", "hose", "hospital", "hot", "hour", "hourglass", "house", "hovercraft", "hub", "hubcap", "humidity", "humor", "hurricane", "hyacinth", "hydrant", "hydrofoil", "hydrogen", "hyena", "hygienic", "ice", "icebreaker", "icicle", "icon", "idea", "ikebana", "illegal", "imprisonment", "improvement", "impulse", "inch", "income", "increase", "index", "india", "indonesia", "industry", "ink", "innocent", "input", "insect", "instruction", "instrument", "insulation", "insurance", "interactive", "interest", "internet", "interviewer", "intestine", "invention", "inventory", "invoice", "iran", "iraq", "iris", "iron", "island", "israel", "italian", "italy", "jacket", "jaguar", "jail", "jam", "james", "january", "japan", "japanese", "jar", "jasmine", "jason", "jaw", "jeans", "jeep", "jeff", "jelly", "jellyfish", "jennifer", "jet", "jewel", "jogging", "john", "join", "joke", "joseph", "journey", "judge", "judo", "juice", "july", "jumbo", "jump", "jumper", "june", "jury", "justice", "jute", "kale", "kamikaze", "kangaroo", "karate", "karen", "kayak", "kendo", "kenneth", "kenya", "ketchup", "kettle", "kettledrum", "kevin", "key", "keyboard", "keyboarding", "kick", "kidney", "kilogram", "kilometer", "kimberly", "kiss", "kitchen", "kite", "kitten", "kitty", "knee", "knickers", "knife", "knight", "knot", "knowledge", "kohlrabi", "korean", "laborer", "lace", "ladybug", "lake", "lamb", "lamp", "lan", "land", "landmine", "language", "larch", "lasagna", "latency", "latex", "lathe", "laugh", "laundry", "laura", "law", "lawyer", "layer", "lead", "leaf", "learning", "leather", "leek", "leg", "legal", "lemonade", "lentil", "leo", "leopard", "letter", "lettuce", "level", "libra", "library", "license", "lier", "lift", "light", "lightning", "lilac", "lily", "limit", "linda", "line", "linen", "link", "lion", "lip", "lipstick", "liquid", "liquor", "lisa", "list", "literature", "litter", "liver", "lizard", "llama", "loaf", "loan", "lobster", "lock", "locket", "locust", "look", "loss", "lotion", "love", "low", "lumber", "lunch", "lunchroom", "lung", "lunge", "lute", "luttuce", "lycra", "lynx", "lyocell", "lyre", "lyric", "macaroni", "machine", "macrame", "magazine", "magic", "magician", "maid", "mail", "mailbox", "mailman", "makeup", "malaysia", "male", "mall", "mallet", "man", "manager", "mandolin", "manicure", "manx", "map", "maple", "maraca", "marble", "march", "margaret", "margin", "maria", "marimba", "mark", "market", "married", "mary", "mascara", "mask", "mass", "match", "math", "mattock", "may", "mayonnaise", "meal", "measure", "meat", "mechanic", "medicine", "meeting", "melody", "memory", "men", "menu", "mercury", "message", "metal", "meteorology", "meter", "methane", "mexican", "mexico", "mice", "michael", "michelle", "microwave", "middle", "mile", "milk", "milkshake", "millennium", "millimeter", "millisecond", "mimosa", "mind", "mine", "mini-skirt", "minibus", "minister", "mint", "minute", "mirror", "missile", "mist", "mistake", "mitten", "moat", "modem", "mole", "mom", "monday", "money", "monkey", "month", "moon", "morning", "morocco" ];
var adjectives = ["blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy",
             "brash","brave","brawny","breakable","breezy","brief","bright","bright","broad",
             "broken","brown","bumpy","burly","bustling","busy","cagey","calculating","callous",
             "calm","capable","capricious","careful","careless","caring","cautious","ceaseless",
             "certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cute","cynical","daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dynamic","dysfunctional","eager","early","earsplitting","earthy","easy","eatable","economic","educated","efficacious","efficient","eight","elastic","elated","elderly","electric","elegant","elfin","elite","embarrassed","eminent","empty","enchanted","enchanting","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","envious","equable","equal","erect","erratic","ethereal","evanescent","evasive","even excellent excited","exciting exclusive","exotic","expensive","extra-large extra-small exuberant","exultant","fabulous","faded","faint fair","faithful","fallacious","false familiar famous","fanatical","fancy","fantastic","far"," far-flung"," fascinated","fast","fat faulty","fearful fearless","feeble feigned","female fertile","festive","few fierce","filthy","fine","finicky","first"," five"," fixed"," flagrant","flaky","flashy","flat","flawless","flimsy"," flippant","flowery","fluffy","fluttering"," foamy","foolish","foregoing","forgetful","fortunate","four frail","fragile","frantic","free"," freezing"," frequent"," fresh"," fretful","friendly","frightened frightening full fumbling functional","funny","furry furtive","future futuristic","fuzzy ","gabby","gainful","gamy","gaping","garrulous","gaudy","general gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful gratis","gray greasy great","greedy","green grey grieving","groovy","grotesque","grouchy","grubby gruesome","grumpy","guarded","guiltless","gullible gusty","guttural H habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly heavy hellish","helpful","helpless","hesitant","hideous high","highfalutin","high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical","icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy","jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile","kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known","labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical","macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious","naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty","oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought","painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","puzzled","puzzling","quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical","rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless","sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy", "spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous","taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender tense","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical","ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost","vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar","wacky","waggish","waiting","","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","wealthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry","xenophobic","yellow","yielding","young","youthful","yummy","zany","zealous","zesty","zippy","zonked"];

function regexOnce_Num(old_one) {
var new_one = old_one
for(var i=0; old_one==new_one && i<new_one.length; i++) {
    new_one = new_one.replace(/a|A/, '4');
    new_one = new_one.replace(/b|B/, '8');
    new_one = new_one.replace(/e|E/, '3');
    new_one = new_one.replace(/i|I/, '1');
    new_one = new_one.replace(/o|O/, '0');
    new_one = new_one.replace(/s|S/, '5');
}
return new_one;
}

function printTable() {
    var words = [];
    var ret_val = "";
    var min_length = document.querySelector("#in1").value;
    var max_length = document.querySelector("#in2").value;
    var tot_len = document.querySelector("#in3").value;
    var tbl = document.querySelector("#res_tab");
    var tr = document.createElement("tr");
    var error = document.getElementById("error");
    
    // validation checks 
    if(min_length != null && min_length === "") {
        alert("Please fill min_length input value");
        return;
    }
    if(max_length != null && max_length === "") {
        alert("Please fill max_length input value");
        return;
    }
    if(tot_len != null && tot_len === "") {
        alert("Please fill tot_len input value");
        return;
    }
    if(parseInt(min_length) < 2) {
        alert("Please insert a min value >= 2");
        return;
    }
    if(parseInt(max_length) < 2) {
        alert("Please insert a max value >= 2");
        return;
    }
    if(parseInt(tot_len) < 2) {
        alert("Please insert a max length >= 2");
        return;
    }
    if(parseInt(tot_len) < parseInt(min_length)) {
        alert("Max Length must not be less than Min. Word length");
        return;
    }
    if(parseInt(min_length) > parseInt(max_length)){
        alert("min word length must not be greater than max. word length");
        return;
    } 
    if(parseInt(max_length) > parseInt(tot_len)) {
        alert("max word length cannot exceed Max Length");
        return;
    }
    if(parseInt(min_length) > parseInt(tot_len)) {
        alert("min word length cannot exceed Max Length");
        return;
    }
    if(parseInt(min_length) > 10) {
        alert("for this case, keep minimum less than 10");
        return;
    }
    if(parseInt(max_length) > 20) {
        alert("for this case, keep maximum less than 20");
        return;
    }
    if(parseInt(tot_len) > 100) {
        alert("for this case, keep Max Length less than 100");
        return;
    }
    
    
    tbl.appendChild(tr);
    if(document.getElementById("easy").checked == false) {
        var count = 0; 
        while( count < 4) {
            var rand_index = Math.ceil(Math.random() * 0x100000000) % dict.length;
            var rand_word = dict[rand_index]; 
            // see if we're in range 
            if(rand_word.length >= parseInt(min_length) && rand_word.length <= parseInt(max_length) ) {
                tot_len -= rand_word.length;
                if(tot_len < 0) {
                    break;
                }
                words.push(rand_word);
                count++;
            }
        }
        var len = 0;
        for(var i =0 ; i < words.length; i++) 
            len += words[i].length;
        if(document.getElementById("num_sub").checked) {
            for(var i =0 ; i < words.length; i++) {
                ret_val = words[i];
                var td = document.createElement("td")
                td.innerHTML = regexOnce_Num(ret_val);
                tr.appendChild(td);
            }
            var td = document.createElement("td");
            td.innerHTML = len;
            tr.appendChild(td);
            tr.classList.add("res_tr");
        }else {
            for(var i =0 ; i < words.length; i++) {
                ret_val = words[i];
                var td = document.createElement("td");
                td.innerHTML = ret_val;
                tr.appendChild(td);
            }
            var td = document.createElement("td");
            td.innerHTML = len;
            tr.appendChild(td);
            tr.classList.add("res_tr");
        }
    }else { // noun verb adjective 
        var count = 0; 
        while( count < 4) {
            var rand_index;
            var rand_word;
            if(count == 0) {
                rand_index = Math.ceil(Math.random() * 0x100000000) % nouns.length;
                rand_word = nouns[rand_index]; 
            }
            if(count == 1) {
                rand_index = Math.ceil(Math.random() * 0x100000000) % adjectives.length;
                rand_word = adjectives[rand_index]; 
            }
            if(count == 2) {
                rand_index = Math.ceil(Math.random() * 0x100000000) % nouns.length;
                rand_word = nouns[rand_index]; 
            }
            if(count == 3) {
                rand_index = Math.ceil(Math.random() * 0x100000000) % verbs.length;
                rand_word = verbs[rand_index]; 
            }
            
            // see if we're in range 
            if(rand_word.length >= min_length && rand_word.length <= max_length ) {
                tot_len -= rand_word.length;
                if(tot_len < 0) {
                    break;
                }
                words.push(rand_word);
                count++;
            }
        }
        var len = 0;
        for(var i =0 ; i < words.length; i++) 
            len += words[i].length;
        if(document.getElementById("num_sub").checked) {
            for(var i =0 ; i < words.length; i++) {
                ret_val = words[i];
                var td = document.createElement("td")
                td.innerHTML = regexOnce_Num(ret_val);
                tr.appendChild(td);
            }
            var td = document.createElement("td");
            td.innerHTML = len;
            tr.appendChild(td);
            tr.classList.add("res_tr");
        }else {
            for(var i =0 ; i < words.length; i++) {
                ret_val = words[i];
                var td = document.createElement("td");
                td.innerHTML = ret_val;
                tr.appendChild(td);
            }
            var td = document.createElement("td");
            td.innerHTML = len;
            tr.appendChild(td);
            tr.classList.add("res_tr");
        }
    }
}