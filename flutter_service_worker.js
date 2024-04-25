'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a6be8cbcf6164d7e439b1928d3b1bd57",
".git/config": "88d3f2804b5dc356e578e0b2f43681aa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d443a2a8776ab85ee3f64b34da46bc09",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "203eb4faf4343f104b89253692670bc3",
".git/logs/refs/heads/main": "b2d320b459321ec01de183c84ed81b1a",
".git/logs/refs/remotes/origin/main": "2efca94fc26a7bbc64d15d8b3ba584dc",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/ea99b11f6971b5182e0c4a4b056e3bf4f9eebe": "763fa447e78ca9c4f9d8f6a07a633e5f",
".git/objects/03/48b6c861f45c556154c89eacf4258b58d8ef32": "0a7127cf6dd73b5f38b09dee3c63b763",
".git/objects/04/2d438a73edfd877edf43cefed22a7e334a4ca5": "3f9e17de7ab3b5d58bbce4c27bef8d39",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/44d0c63ea65dce1c935dd0c729e70a59a92b74": "17e24890cbcca16282dc2bf096950f16",
".git/objects/0e/a4b10515114d69e7c450dfd3eb1b8f011b04b6": "65fc0e7f375a96573aa14cdd864d5828",
".git/objects/10/0ac52e6f6fea81b4a5ef5ed9e759fa9c1a0be3": "0b94de56c04a150142ecd14fddedcae4",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1e/02a447dcfbf226619a35195b6e223d56fa2511": "1f910569d7fdd2f6463cb719faf0845a",
".git/objects/1f/f6e07efb3903253d283cc3db9dbc733309021d": "73ca25b2f36769e07d4bce6a8acba720",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/3e5dbf9fb8fa266e01a2ab41dcd70566db3d79": "4719da948cea7bdfb968ecf51abffa92",
".git/objects/27/d999ee3b4373dfd5552bfc7042250cfbeba18e": "74eaac252b26cdb59bf7be1b4bae6aff",
".git/objects/29/8722a5dce8117db16bea199bb83d7d1b96443f": "44e0240eb9786c254b1eacb56ad1281f",
".git/objects/2a/ccf4f29a3d4291d0a7a2e7cd76b791a0526e4e": "80f76d3039fa7e9e1cc53241a3af2582",
".git/objects/2b/7284ad7ae0f4bcf8452ae6ba57b75016770000": "c2a421b842cb40f3d6414458a55bb4b2",
".git/objects/2f/d7aeee93f97c3c60a0d0535ff6623bc50654ef": "a4516ca4f44f220b841c2ba909888965",
".git/objects/30/effbc980a88c1b600437a935c8916f5fb426f4": "cee189739030ca3fc1004579e2915bd5",
".git/objects/37/8c14a7f6046e257af2e8043ccc1fadfc07a759": "42839e4cd4f67aacce0405af03d0325c",
".git/objects/37/cd027311fe2c155597948209e377c11cc06889": "932fae1499d441005864449a6597969c",
".git/objects/39/7084922edbdfc524dd1c313c11404dd94dcc3c": "f85515463a7fb0b25382a28e32dcf2d0",
".git/objects/3a/4796f6e5d20423f0e5d7c99baa33769c928252": "6c3e291968ff8034d081952d5788ed6d",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/ef82bc93db6999e9a6e142e7f124c7c79801b4": "e5ba8bd1e379844f3a8ec80469d0d23d",
".git/objects/44/3863172f45332112d2f0298309bea9d978d8d4": "493ff02fe01461b0c2f339f4273bc886",
".git/objects/48/69530e5dfe26b47bf5c245e5c2e493dbe07281": "af53b9ffca0aa3c4a92a48e52306c9d4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/15f8a619b3f242f877509c163dbaa43e8ca0df": "c6d94055833276f64fd4ddb202f4b716",
".git/objects/4c/5c5532b77eb148e3944201a36ca9bb117aeee7": "02b328ab1acda5a6306b81d71af11cb1",
".git/objects/4e/d23baa195bb52b08b4c8feaa75abf38d25a511": "48a7a5de1714ac34846b3a0e04c81724",
".git/objects/50/d08fee1c698085cb487420bea6af986c953b68": "4c474415fb421012eb840b1d7bd6c1e3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/4dbcb557026671985f759e2d41e62833c99f6a": "c38e57f7d6433f8e33b6385966b6c3e5",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/ee4bd4d4863ba372dbe614e3615679e50cf1f4": "cd223c5fe94dba0b30da9350bbef1b1e",
".git/objects/61/2809c3d2a9fd3580d1b8c33c598d80944b7bc1": "2b7fb8f12cf51ab5e0b71cc5a9b5da0a",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6d/f1e97bc972f3356f1bb845a699bab65e9addfe": "8d0b108c6af18debd7103809a621b014",
".git/objects/6e/336103af50ce59e353cbe808f1a41d9ea6e42b": "6515c81350e26b081151c10eaa5f3624",
".git/objects/6f/01a05b7ad273d0caad90c7c70d42c708e0bf8b": "beaad787abe3f8d0d7f1812623ad7900",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/206e25485ce5499988e4985b9e9c07403c21c4": "59a13090783cd71fef2ae6e924091fda",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/c6120c45fcbca803d8b5f7c01fd051912822ed": "d70406897291dd8795f85da8e87d21a3",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "81d4a9f2820f141c2c1d314a622d8899",
".git/objects/78/44a1567a477eab9764fcd64ac5f6a26da72b48": "4aa26dc1acc289bd45f33c2cf06617e6",
".git/objects/79/b75821458e0d26246fc6ce5fdb76d3d1e61f8b": "ec8d4b624552bdf06c95ca1a02502c63",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/f6d36a2a456ccd84870417d0cc4118246275e5": "3838601c72abc1d4b1b661e4012d9d3d",
".git/objects/87/87f19e0e2588a3a83a9372b616b772aacc95e4": "a090bafb65bb4fbbd05d04f5cdfda2fd",
".git/objects/8a/de0a2a665b21901cbbd419fcffeaf323069c30": "05a7e0eb2e6aca36ef2811731a4726eb",
".git/objects/91/b5b59df77e226685be96524339fedb115a0ecb": "6e7584bcaa46fa43774139b9aca818e0",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/e4e65c6e7cec67cbafec04e837e47aa7a468a5": "9701e64ec07c59912b139da17bf2312b",
".git/objects/9c/c24e32e0d9aae3876603186443a0ae07a2e1b0": "30d773c184428dd459ca9c61160e64c2",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/fbe47d06bf23fb476c7e4d09b7c4f2743e2964": "a3490820961e257aa6c6d198dd6dbb9e",
".git/objects/a2/ff3681c50dc9190766f5b8719aae05ef964049": "dffe123d1ba1a60816302704a4401ea2",
".git/objects/a3/29ee308f69cf048a01bcfe131ac548cfc3b56c": "72399a149c872e3dada811a4e15fee8f",
".git/objects/a9/0bdb88c5ac37dc39280c076a3cc3b7969353c7": "39cb18a63e0309230689cc0355c1abe3",
".git/objects/af/3f81a2832b2d0a141a2fe08eb31d5a0d81d22b": "af1555f4030b303c9cd9ba0d5c509027",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/bb/dc63c0013f104b99e1dccbfe9f38004adb3b15": "36ae2eec3142b78b4f003dada7b831a7",
".git/objects/c1/ddbb8d6352f0a681b1365fce9dac109a771eeb": "a320f0edd5021c9e4a197a4cb6ef6b8b",
".git/objects/c3/9eb71da94bc57675209aaf9e2b3f7ca497f89d": "5ee01a7785526b7ccf96bf49a3b06a9f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/d6212fdb4dae9dfb57e46a01de69506c895fc4": "2f4a3eab1269cce5d6cf9b4bd40f85bf",
".git/objects/c8/18e65b0584832b870f681be6f56cec97da7f15": "2810caaa930460d474ed77a77f6afa1d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/4fa533e4e44a189c1b7f18b9da1cf291532360": "76ccd7f6ce9310051f5db7cb7f2bedc8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/cf29abdb09c24a656f6aa575c3b02f489d8c9f": "7aab2e2e0f346e0df1a62139a4d4fcce",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/4146bd6d1c6d003707e9a858549c3012d25263": "cf07eb2dd0c2b084f6bb2bbf5947da89",
".git/objects/dc/102a0a044fa841d122d34d0d28ceb0f1c558d6": "17234cc6f863ec8a53c29bb1466255c4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/98dba171cb6ac39c4ca04ec2de76e96d2db45c": "8dbcd58e73da6ccdfce7f1c418bf0eae",
".git/objects/e5/8b14cead71668ff78506388e65fcff307a38bd": "dce67fcd6932207a80706be22db27565",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ec/e3bd4af0d51fcc8a714e463eb901991a6ece66": "fd28c29605ae03ae8f4a9fb2b86880a8",
".git/objects/ee/3b59edc13fcb0f55e8ee986cc6ee6da15fc60d": "872d20ffceb57033e05012487cf0bffd",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fa/63938ee268e314f7ffa4351d2d05f91dc89ecf": "89a086b02793c11c2905719c372593ec",
".git/objects/ff/4b9cba5d5ffc910e19e599d4f66cd133aeb987": "23c47f8b16052a11405c831aba8a808d",
".git/refs/heads/main": "1fe7924541cf0fd9bf32a1014eb5fa0e",
".git/refs/remotes/origin/main": "1fe7924541cf0fd9bf32a1014eb5fa0e",
"assets/AssetManifest.bin": "4ced54a27b99831ba4cf76ac9e8836b9",
"assets/AssetManifest.bin.json": "472039e37b0ced3ec272444ecd1a4bc9",
"assets/AssetManifest.json": "da9e3963c132cc0f77332e7c6e23950c",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/images/brotojpg.jpg": "5ffc18f20d37809752f298e21c45f0ed",
"assets/assets/images/bt.png": "48d9bb2ffd08420fcea242b76f7841e8",
"assets/assets/images/css3.png": "c9421be52fe48fdf04839b53f8e9f1d4",
"assets/assets/images/cv.pdf": "a708533eb32d760e95bae3882f03e17c",
"assets/assets/images/Dart.png": "0026612a51dcda82839c135a331f8ee6",
"assets/assets/images/dileepabandara_dev.png": "ba5334a4bc29e0aa0fb161f1e72c9e4f",
"assets/assets/images/firebase.png": "7371a3d035412a78dabc88d0e5237b44",
"assets/assets/images/flutter.png": "b245244915e295b754c173e2fe159f8f",
"assets/assets/images/flutter_fly.webp": "7c045e367ec187bd2aaf46fcc833dc8f",
"assets/assets/images/getX.png": "6d476fe7577df416ccb3873e1362af41",
"assets/assets/images/git.png": "5eb26339f32f9e756edb4252afbd1f33",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/html5.png": "5ab3e3845cf9f0609f21767e9b693037",
"assets/assets/images/js.png": "94ae2dcd4fa410811cab4e1fbb403340",
"assets/assets/images/logo.gif": "e5b8fcb1647ebf22b4ccbd52049d6044",
"assets/assets/images/logo1.png": "f7800027ca1fb97727d9b119e86e836b",
"assets/assets/images/logo_2.png": "9141b650e6030a8022031300bdd5e2e2",
"assets/assets/images/map.png": "e92cb7a10c3bf3ae4b5c716e9f2b2263",
"assets/assets/images/my.png": "144883814a9883abed8cfc7187542a19",
"assets/assets/images/my2.png": "22ab0492e68accb56739f044a28ca4b0",
"assets/assets/images/netflix.png": "38b9961a844cd4ad30ff39ec258efdd6",
"assets/assets/images/new.png": "6675451a8154be9d23629c06298e79df",
"assets/assets/images/pj1.png": "07cf16cf4a9cc0af74ac5a8e1f3fc960",
"assets/assets/images/pj2.png": "dbe0e92985e931a258560211b2b3f3b4",
"assets/assets/images/postman.png": "b391087a005c952e3a06f0c4ac705ab6",
"assets/assets/images/rest.png": "e832fd81d9f48450e232b2b6170ec4d6",
"assets/assets/images/rivarpod.png": "14e65888050f2be1dbab741db6ea6a96",
"assets/assets/images/sql.png": "ace8be3ae7d64c55ddbdf5928b5cf260",
"assets/assets/images/wet.png": "bda00b701c606967af47289d12a441f9",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3df2892101e0fdffbf24b939c8a2b927",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "8233c1ef5036aabdc0276b83919567d4",
"/": "8233c1ef5036aabdc0276b83919567d4",
"main.dart.js": "90f3eaaa02b2774014573bb8f17dd669",
"manifest.json": "0d41addfc3f48821e8e067eea75872dd",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "fd07e329d0addaee7af5d9dfe633aa54",
"version.json": "bda7a2f80c3657882ba7949009440b66"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
