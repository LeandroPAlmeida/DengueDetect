const statesAndCities = [
  {
  
    geocode: "3550308",
    state: "São Paulo",
    latitude: -23.55063937679318,
    longitude: -46.63247805608152,
    casos: 2047,
    nivel: 4,
    cities: [

      {
        geocode: "3500105",
        text: "Adamantina",
        latitude: -21.68859392855001,
        longitude: -51.07965631958986,
        casos: 25,
        nivel: 1
    },
    {
      geocode: "3500204",
      text: "Adolfo",
      latitude: -21.235757579256827,
      longitude: -49.64502233778472,
      casos: 5,
      nivel: 1
  },
  {
      geocode: "3500303",
      text: "Aguaí",
      latitude: -22.058253339712227,
      longitude: -46.97818392799938,
      casos: 4,
      nivel: 1
  },
  {
      geocode: "3500402",
      text: "Águas da Prata",
      latitude: -21.944661237621407,
      longitude: -46.71989555455852,
      casos: 0,
      nivel: 1
  },
  {
      geocode: "3500501",
      text: "Águas de Lindóia",
      latitude: -22.480259080440405,
      longitude: -46.63337939414585,
      casos: 0,
      nivel: 1
  },
  {
      geocode: "3500550",
      text: "Águas de Santa Bárbara",
      latitude: -22.88245186141165,
      longitude: -49.23460392560201,
      casos: 0,
      nivel: 1
  },
  {
      geocode: "3500600",
      text: "Águas de São Pedro",
      latitude: -22.599679454459647,
      longitude: -47.875886090819726,
      casos: 0,
      nivel: 1
  },
  {
      geocode: "3500709",
      text: "Agudos",
      latitude: -22.475741251172234,
      longitude: -48.994863219392215,
      casos: 0,
      nivel: 1
  },
  {
      geocode: "3500758",
      text: "Alambari",
      latitude: -23.550274613233896,
      longitude: -47.899239961289204,
      casos: 1,
      nivel: 1
  },
  {
      geocode: "3500808",
      text: "Alfredo Marcondes",
      latitude: -21.953003406426095,
      longitude: -51.41523816380787,
      casos: 0,
      nivel: 1
  },
  {
      geocode: "3500907",
      text: "Altair",
      latitude: -20.522909276592216,
      longitude: -49.06160319581844,
      casos: 0,
      nivel: 1
  },
  {
    geocode: "3501004",
    text: "Altinópolis",
    latitude: -21.02152282519353,
    longitude: -47.37150870913656,
    casos: 0,
    nivel: 1
},
{
    geocode: "3501103",
    text: "Alto Alegre",
    latitude: -21.58173924507789,
    longitude: -50.16480819653146,
    casos: 0,
    nivel: 1
},
{
    geocode: "3501152",
    text: "Alumínio",
    latitude: -23.529995927665436,
    longitude: -47.25308962615387,
    casos: 0,
    nivel: 1
},
{
    geocode: "3501202",
    text: "Álvares Florence",
    latitude: -20.32087399938788,
    longitude: -49.91022525142728,
    casos: 7,
    nivel: 1
},
{
    geocode: "3501301",
    text: "Álvares Machado",
    latitude: -22.078151489695248,
    longitude: -51.47359421803269,
    casos: 4,
    nivel: 1
},
{
    geocode: "3501400",
    text: "Álvaro de Carvalho",
    latitude: -22.07799610245946,
    longitude: -49.72032873554203,
    casos: 2,
    nivel: 1
},
{
    geocode: "3501509",
    text: "Alvinlândia",
    latitude: -22.4418576658748,
    longitude: -49.76369515304435,
    casos: 0,
    nivel: 1
},
{
    geocode: "3501608",
    text: "Americana",
    latitude: -22.73764095432403,
    longitude: -47.33232069033823,
    casos: 81,
    nivel: 1
},
{
    geocode: "3501707",
    text: "Américo Brasiliense",
    latitude: -21.728852670046177,
    longitude: -48.10335226338624,
    casos: 2,
    nivel: 1
},
{
    geocode: "3501806",
    text: "Américo de Campos",
    latitude: -20.298338638547275,
    longitude: -49.73429576250689,
    casos: 4,
    nivel: 1
},
{
    geocode: "3501905",
    text: "Amparo",
    latitude: -22.70716686485075,
    longitude: -46.77011301311614,
    casos: 5,
    nivel: 1
},
{
    geocode: "3502002",
    text: "Analândia",
    latitude: -22.125656448276256,
    longitude: -47.66247749125218,
    casos: 0,
    nivel: 1
},
{
    geocode: "3502101",
    text: "Andradina",
    latitude: -20.899539011222902,
    longitude: -51.37288772158808,
    casos: 13,
    nivel: 1
},
{
    geocode: "3502200",
    text: "Angatuba",
    latitude: -23.49207681505835,
    longitude: -48.415763873680845,
    casos: 4,
    nivel: 1
},
{
    geocode: "3502309",
    text: "Anhembi",
    latitude: -22.789753931273488,
    longitude: -48.12824366046972,
    casos: 4,
    nivel: 1
},
{
  geocode: "3502408",
  text: "Anhumas",
  latitude: -22.29606207712153,
  longitude: -51.38585647680956,
  casos: 0,
  nivel: 1
},
{
  geocode: "3502507",
  text: "Aparecida",
  latitude: -22.846772070815543,
  longitude: -45.23243357297581,
  casos: 2,
  nivel: 1
},
{
  geocode: "3502606",
  text: "Aparecida d'Oeste",
  latitude: -20.451043824805698,
  longitude: -50.88105661561778,
  casos: 3,
  nivel: 1
},
{
  geocode: "3502705",
  text: "Apiaí",
  latitude: -24.509202514137808,
  longitude: -48.84626710567284,
  casos: 0,
  nivel: 1
},
{
  geocode: "3502754",
  text: "Araçariguama",
  latitude: -23.437412976327963,
  longitude: -47.063275490889446,
  casos: 1,
  nivel: 1
},
{
  geocode: "3502804",
  text: "Araçatuba",
  latitude: -21.207091018543665,
  longitude: -50.436123870381884,
  casos: 321,
  nivel: 4
},
{
  geocode: "3502903",
  text: "Araçoiaba da Serra",
  latitude: -23.507702181765698,
  longitude: -47.60576280111707,
  casos: 3,
  nivel: 1
},
{
  geocode: "3503000",
  text: "Aramina",
  latitude: -20.084935355711842,
  longitude: -47.78840140649551,
  casos: 0,
  nivel: 1
},
{
  geocode: "3503109",
  text: "Arandu",
  latitude: -23.134877763309454,
  longitude: -49.05436623944966,
  casos: 0,
  nivel: 1
},
{
  geocode: "3503158",
  text: "Arapeí",
  latitude: -22.67169370957476,
  longitude: -44.44662401560446,
  casos: 0,
  nivel: 1
},
{
  geocode: "3503208",
  text: "Araraquara",
  latitude: -21.77339399900469,
  longitude: -48.17149052459258,
  casos: 48,
  nivel: 1
},
{
  geocode: "3503307",
  text: "Araras",
  latitude: -22.36492633207996,
  longitude: -47.378875381364,
  casos: 33,
  nivel: 1
},
{
  geocode: "3503356",
  text: "Arco-Íris",
  latitude: -21.774509924925184,
  longitude: -50.467589892197395,
  casos: 1,
  nivel: 1
},
{
  geocode: "3503406",
  text: "Arealva",
  latitude: -22.048688464993237,
  longitude: -49.03429981711203,
  casos: 1,
  nivel: 1
},
{
  geocode: "3503505",
  text: "Areias",
  latitude: -22.580131537131667,
  longitude: -44.69284346725428,
  casos: 0,
  nivel: 1
},
{
  geocode: "3503604",
  text: "Areiópolis",
  latitude: -22.669821115223062,
  longitude: -48.662953800100524,
  casos: 2,
  nivel: 1
},
{
  geocode: "3503703",
  text: "Ariranha",
  latitude: -21.18735374990439,
  longitude: -48.788777600389,
  casos: 0,
  nivel: 1
},
{
  geocode: "3503802",
  text: "Artur Nogueira",
  latitude: -22.57411071140262,
  longitude: -47.1717403305709,
  casos: 6,
  nivel: 1
},
{
  geocode: "3503901",
  text: "Arujá",
  latitude: -23.395285310108946,
  longitude: -46.3230704966186,
  casos: 2,
  nivel: 1
},
{
  geocode: "3503950",
  text: "Aspásia",
  latitude: -20.157805483790153,
  longitude: -50.72650446401471,
  casos: 0,
  nivel: 1
},
{
  geocode: "3504008",
  text: "Assis",
  latitude: -22.661491074271567,
  longitude: -50.41837997071125,
  casos: 50,
  nivel: 1
},
{
  geocode: "3504107",
  text: "Atibaia",
  latitude: -23.115862392409973,
  longitude: -46.553416327306465,
  casos: 43,
  nivel: 1
},
{
  geocode: "3504206",
  text: "Auriflama",
  latitude: -20.687438588778466,
  longitude: -50.55316260859306,
  casos: 0,
  nivel: 1
},
{
  geocode: "3504305",
  text: "Avaí",
  latitude: -22.15693451886806,
  longitude: -49.33236590628746,
  casos: 0,
  nivel: 1
},
{
  geocode: "3504404",
  text: "Avanhandava",
  latitude: -21.461739961028538,
  longitude: -49.94829248738227,
  casos: 0,
  nivel: 1
},
{
  geocode: "3504503",
  text: "Avaré",
  latitude: -23.09881216796997,
  longitude: -48.92307121912982,
  casos: 1,
  nivel: 1
},
{
  geocode: "3504602",
  text: "Bady Bassitt",
  latitude: -20.91859356764703,
  longitude: -49.444525527208356,
  casos: 7,
  nivel: 1
},
{
  geocode: "3504701",
  text: "Balbinos",
  latitude: -21.90161936507284,
  longitude: -49.357938047190615,
  casos: 0,
  nivel: 1
},
{
  geocode: "3504800",
  text: "Bálsamo",
  latitude: -20.733719154057532,
  longitude: -49.58357670200401,
  casos: 5,
  nivel: 1
},
{
  geocode: "3504909",
  text: "Bananal",
  latitude: -22.682726564888192,
  longitude: -44.319515150916835,
  casos: 0,
  nivel: 1
},
{
  geocode: "3505005",
  text: "Barão de Antonina",
  latitude: -23.628813597089056,
  longitude: -49.55994864497623,
  casos: 0,
  nivel: 1
},
{
  geocode: "3505104",
  text: "Barbosa",
  latitude: -21.266052663328885,
  longitude: -49.953022751084944,
  casos: 1,
  nivel: 1
},
{
  geocode: "3505203",
  text: "Bariri",
  latitude: -22.074704074769382,
  longitude: -48.73908352887657,
  casos: 0,
  nivel: 1
},
{
  geocode: "3505302",
  text: "Barra Bonita",
  latitude: -22.488539233796338,
  longitude: -48.564350960784544,
  casos: 3,
  nivel: 1
},
{
  geocode: "3505351",
  text: "Barra do Chapéu",
  latitude: -24.472967427624447,
  longitude: -49.0231323875321,
  casos: 0,
  nivel: 1
},
{
  geocode: "3505401",
  text: "Barra do Turvo",
  latitude: -24.75578180981516,
  longitude: -48.50464470813472,
  casos: 0,
  nivel: 1
},
{
  geocode: "3505500",
  text: "Barretos",
  latitude: -20.5723718107177,
  longitude: -48.56504904651675,
  casos: 27,
  nivel: 1
},
{
  geocode: "3505609",
  text: "Barrinha",
  latitude: -21.191084482880246,
  longitude: -48.16104335095153,
  casos: 6,
  nivel: 1
},
{
  geocode: "3505708",
  text: "Barueri",
  latitude: -23.503412199103455,
  longitude: -46.87777790020253,
  casos: 20,
  nivel: 1
},
{
  geocode: "3505807",
  text: "Bastos",
  latitude: -21.923302038910986,
  longitude: -50.731247339543366,
  casos: 0,
  nivel: 1
},
{
  geocode: "3505906",
  text: "Batatais",
  latitude: -20.886274012482374,
  longitude: -47.58602053946367,
  casos: 10,
  nivel: 1
},
{
  geocode: "3506003",
  text: "Bauru",
  latitude: -22.316077981893386,
  longitude: -49.06923877331298,
  casos: 242,
  nivel: 1
},
{
  geocode: "3506102",
  text: "Bebedouro",
  latitude: -20.93127928404986,
  longitude: -48.49409730684112,
  casos: 1,
  nivel: 1
},
{
  geocode: "3506201",
  text: "Bento de Abreu",
  latitude: -21.271408603838957,
  longitude: -50.81196223485688,
  casos: 0,
  nivel: 1
},
{
  geocode: "3506300",
  text: "Bernardino de Campos",
  latitude: -23.014750653980446,
  longitude: -49.47347035302549,
  casos: 0,
  nivel: 1
},
{
  geocode: "3506359",
  text: "Bertioga",
  latitude: -23.799327445083804,
  longitude: -46.02277539981206,
  casos: 1,
  nivel: 1
},
{
  geocode: "3506409",
  text: "Bilac",
  latitude: -21.40087961851786,
  longitude: -50.478382418696775,
  casos: 0,
  nivel: 1
},
{
  geocode: "3506508",
  text: "Birigui",
  latitude: -21.28060738935714,
  longitude: -50.33368342229222,
  casos: 72,
  nivel: 1
},
{
  geocode: "3506607",
  text: "Biritiba Mirim",
  latitude: -23.569074282251176,
  longitude: -46.03823360004978,
  casos: 0,
  nivel: 1
},
{
  geocode: "3506706",
  text: "Boa Esperança do Sul",
  latitude: -21.989742616675986,
  longitude: -48.385554885272505,
  casos: 10,
  nivel: 1
},
{
  geocode: "3506805",
  text: "Bocaina",
  latitude: -22.14305777237714,
  longitude: -48.524856259967386,
  casos: 5,
  nivel: 1
},
{
  geocode: "3506904",
  text: "Bofete",
  latitude: -23.10247446490573,
  longitude: -48.25829162308274,
  casos: 7,
  nivel: 1
},
{
  geocode: "3507001",
  text: "Boituva",
  latitude: -23.28619143607571,
  longitude: -47.677901725098046,
  casos: 7,
  nivel: 1
},
{
  geocode: "3507100",
  text: "Bom Jesus dos Perdões",
  latitude: -23.135747642013165,
  longitude: -46.463832887726724,
  casos: 0,
  nivel: 1
},
{
  geocode: "3507159",
  text: "Bom Sucesso de Itararé",
  latitude: -24.31952056099973,
  longitude: -49.143107718753285,
  casos: 0,
  nivel: 1
},
{
  geocode: "3507209",
  text: "Borá",
  latitude: -22.269459384635127,
  longitude: -50.54257264413661,
  casos: 0,
  nivel: 1
},
{
  geocode: "3507308",
  text: "Boracéia",
  latitude: -22.194474041965425,
  longitude: -48.7782566804196,
  casos: 0,
  nivel: 1
},
{
  geocode: "3507407",
  text: "Borborema",
  latitude: -21.622065747592057,
  longitude: -49.0734774163026,
  casos: 3,
  nivel: 1
},
{
  geocode: "3507456",
  text: "Borebi",
  latitude: -22.56970468822026,
  longitude: -48.97027402551937,
  casos: 0,
  nivel: 1
},
{
  geocode: "3507506",
  text: "Botucatu",
  latitude: -22.887020244168816,
  longitude: -48.44613700934737,
  casos: 27,
  nivel: 1
},
{
  geocode: "3507605",
  text: "Bragança Paulista",
  latitude: -22.952399288304008,
  longitude: -46.53940753359375,
  casos: 9,
  nivel: 1
},
{
  geocode: "3507704",
  text: "Braúna",
  latitude: -21.501283102581958,
  longitude: -50.31685724629357,
  casos: 0,
  nivel: 1
},
{
  geocode: "3507753",
  text: "Brejo Alegre",
  latitude: -21.167294047734764,
  longitude: -50.18576037618227,
  casos: 0,
  nivel: 1
},
{
  geocode: "3507803",
  text: "Brodowski",
  latitude: -20.988348611850757,
  longitude: -47.65879720664177,
  casos: 4,
  nivel: 1
},
{
  geocode: "3507902",
  text: "Brotas",
  latitude: -22.286194126400733,
  longitude: -48.12567626990481,
  casos: 3,
  nivel: 1
},
{
  geocode: "3508009",
  text: "Buri",
  latitude: -23.798378167212853,
  longitude: -48.59741281284959,
  casos: 0,
  nivel: 1
},
{
  geocode: "3508108",
  text: "Buritama",
  latitude: -21.06494409376431,
  longitude: -50.14339463959437,
  casos: 8,
  nivel: 1
},
{
  geocode: "3508207",
  text: "Buritizal",
  latitude: -20.193661770070293,
  longitude: -47.71051900095866,
  casos: 0,
  nivel: 1
},
{
  geocode: "3508306",
  text: "Cabrália Paulista",
  latitude: -22.46014070580799,
  longitude: -49.3374419223378,
  casos: 1,
  nivel: 1
},
{
  geocode: "3508405",
  text: "Cabreúva",
  latitude: -23.306915951546426,
  longitude: -47.1349993757422,
  casos: 1,
  nivel: 1
},
{
  geocode: "3508504",
  text: "Caçapava",
  latitude: -23.10339737465041,
  longitude: -45.70327838896197,
  casos: 67,
  nivel: 4
},
{
  geocode: "3508603",
  text: "Cachoeira Paulista",
  latitude: -22.66268647285044,
  longitude: -45.00619605237068,
  casos: 3,
  nivel: 1
},
{
  geocode: "3508702",
  text: "Caconde",
  latitude: -21.528418511821943,
  longitude: -46.64256094063501,
  casos: 3,
  nivel: 1
},
{
  geocode: "3508801",
  text: "Cafelândia",
  latitude: -21.804554509972437,
  longitude: -49.6046044896543,
  casos: 0,
  nivel: 1
},
{
  geocode: "3508900",
  text: "Caiabu",
  latitude: -22.01309931132908,
  longitude: -51.23549033327932,
  casos: 1,
  nivel: 1
},
{
  geocode: "3509007",
  text: "Caieiras",
  latitude: -23.36262173953869,
  longitude: -46.74766438887806,
  casos: 0,
  nivel: 1
},
{
  geocode: "3509106",
  text: "Caiuá",
  latitude: -21.830879047816634,
  longitude: -51.98822343209274,
  casos: 1,
  nivel: 1
},
{
  geocode: "3509205",
  text: "Cajamar",
  latitude: -23.336309809708712,
  longitude: -46.84046158164739,
  casos: 12,
  nivel: 1
},
{
  geocode: "3509254",
  text: "Cajati",
  latitude: -24.729909820908134,
  longitude: -48.1079156947051,
  casos: 0,
  nivel: 1
},
{
  geocode: "3509304",
  text: "Cajobi",
  latitude: -20.880545971123446,
  longitude: -48.81120950269554,
  casos: 0,
  nivel: 1
},
{
  geocode: "3509403",
  text: "Cajuru",
  latitude: -21.275877513174773,
  longitude: -47.3036846159868,
  casos: 0,
  nivel: 1
},
{
  geocode: "3509452",
  text: "Campina do Monte Alegre",
  latitude: -23.58863598289463,
  longitude: -48.47646009367858,
  casos: 0,
  nivel: 1
},
{
  geocode: "3509502",
  text: "Campinas",
  latitude: -22.91164034237406,
  longitude: -47.06639289020764,
  casos: 377,
  nivel: 1
},
{
  geocode: "3509601",
  text: "Campo Limpo Paulista",
  latitude: -23.206242450797557,
  longitude: -46.782922398080714,
  casos: 0,
  nivel: 1
},
{
  geocode: "3509700",
  text: "Campos do Jordão",
  latitude: -22.74111234547348,
  longitude: -45.592367034730046,
  casos: 3,
  nivel: 1
},
{
  geocode: "3509809",
  text: "Campos Novos Paulista",
  latitude: -22.601377184115204,
  longitude: -50.00144684765013,
  casos: 0,
  nivel: 1
},
{
  geocode: "3509908",
  text: "Cananéia",
  latitude: -25.010352032527383,
  longitude: -47.92933234370763,
  casos: 0,
  nivel: 1
},
{
  geocode: "3509957",
  text: "Canas",
  latitude: -22.701785032606466,
  longitude: -45.053448210982936,
  casos: 0,
  nivel: 1
},
{
  geocode: "3510005",
  text: "Cândido Mota",
  latitude: -22.745904670949916,
  longitude: -50.390672566836166,
  casos: 4,
  nivel: 1
},
{
  geocode: "3510104",
  text: "Cândido Rodrigues",
  latitude: -21.32542131666181,
  longitude: -48.628153584643854,
  casos: 0,
  nivel: 1
},
{
  geocode: "3510153",
  text: "Canitar",
  latitude: -23.005471581212603,
  longitude: -49.78347935881236,
  casos: 0,
  nivel: 1
},
{
  geocode: "3510203",
  text: "Capão Bonito",
  latitude: -24.002422674107947,
  longitude: -48.34673092139325,
  casos: 1,
  nivel: 1
},
{
  geocode: "3510302",
  text: "Capela do Alto",
  latitude: -23.46838225444844,
  longitude: -47.731539817159536,
  casos: 6,
  nivel: 1
},
{
  geocode: "3510401",
  text: "Capivari",
  latitude: -22.994269251037114,
  longitude: -47.50789408722761,
  casos: 0,
  nivel: 1
},
{
  geocode: "3510500",
  text: "Caraguatatuba",
  latitude: -23.62030352764928,
  longitude: -45.410773417240414,
  casos: 56,
  nivel: 1
},
{
  geocode: "3510609",
  text: "Carapicuíba",
  latitude: -23.531984017244813,
  longitude: -46.832907324443525,
  casos: 6,
  nivel: 1
},
{
  geocode: "3510708",
  text: "Cardoso",
  latitude: -20.08186383204851,
  longitude: -49.915181890206235,
  casos: 2,
  nivel: 1
},
{
  geocode: "3510807",
  text: "Casa Branca",
  latitude: -21.772525595785943,
  longitude: -47.077185159311256,
  casos: 21,
  nivel: 1
},
{
  geocode: "3510906",
  text: "Cássia dos Coqueiros",
  latitude: -21.281351506412143,
  longitude: -47.168681274877734,
  casos: 1,
  nivel: 1
},
{
  geocode: "3511003",
  text: "Castilho",
  latitude: -20.87138842693819,
  longitude: -51.489481969016616,
  casos: 6,
  nivel: 1
},
{
  geocode: "3511102",
  text: "Catanduva",
  latitude: -21.137950844466502,
  longitude: -48.974878985340915,
  casos: 113,
  nivel: 1
},
{
  geocode: "3511201",
  text: "Catiguá",
  latitude: -21.058011108981844,
  longitude: -49.062503617142944,
  casos: 0,
  nivel: 1
},
{
  geocode: "3511300",
  text: "Cedral",
  latitude: -20.902510368412912,
  longitude: -49.27013186797405,
  casos: 6,
  nivel: 1
},
{
  geocode: "3511409",
  text: "Cerqueira César",
  latitude: -23.03350971159977,
  longitude: -49.166526044292524,
  casos: 0,
  nivel: 1
},
{
  geocode: "3511508",
  text: "Cerquilho",
  latitude: -23.16790924437664,
  longitude: -47.746920938385884,
  casos: 2,
  nivel: 1
},
{
  geocode: "3511607",
  text: "Cesário Lange",
  latitude: -23.224352629256536,
  longitude: -47.95290536463614,
  casos: 2,
  nivel: 1
},
{
  geocode: "3511706",
  text: "Charqueada",
  latitude: -22.5131960776815,
  longitude: -47.77366258756603,
  casos: 4,
  nivel: 1
},
{
  geocode: "3557204",
  text: "Chavantes",
  latitude: -23.037543578212308,
  longitude: -49.71151496552712,
  casos: 0,
  nivel: 1
},
{
  geocode: "3511904",
  text: "Clementina",
  latitude: -21.558129449542754,
  longitude: -50.446815177799856,
  casos: 0,
  nivel: 1
},
{
  geocode: "3512001",
  text: "Colina",
  latitude: -20.70940865228702,
  longitude: -48.53127823899185,
  casos: 1,
  nivel: 1
},
{
  geocode: "3512100",
  text: "Colômbia",
  latitude: -20.17584928207521,
  longitude: -48.68480507714275,
  casos: 0,
  nivel: 1
},
{
  geocode: "3512209",
  text: "Conchal",
  latitude: -22.332547102105426,
  longitude: -47.17178990168703,
  casos: 1,
  nivel: 1
},
{
  geocode: "3512308",
  text: "Conchas",
  latitude: -23.014818512683323,
  longitude: -48.01346594760773,
  casos: 12,
  nivel: 1
},
{
  geocode: "3512407",
  text: "Cordeirópolis",
  latitude: -22.480833525490226,
  longitude: -47.45372066010415,
  casos: 3,
  nivel: 1
},
{
  geocode: "3512506",
  text: "Coroados",
  latitude: -21.354931903046918,
  longitude: -50.283781505180364,
  casos: 3,
  nivel: 1
},
{
  geocode: "3512605",
  text: "Coronel Macedo",
  latitude: -23.6319041544278,
  longitude: -49.31062427329846,
  casos: 0,
  nivel: 1
},
{
  geocode: "3512704",
  text: "Corumbataí",
  latitude: -22.222906557106594,
  longitude: -47.62331492237049,
  casos: 0,
  nivel: 1
},
{
  geocode: "3512803",
  text: "Cosmópolis",
  latitude: -22.64572340265109,
  longitude: -47.1978938994057,
  casos: 25,
  nivel: 4
},
{
  geocode: "3512902",
  text: "Cosmorama",
  latitude: -20.47596194379904,
  longitude: -49.78135788601254,
  casos: 0,
  nivel: 1
},
{
  geocode: "3513009",
  text: "Cotia",
  latitude: -23.606007635867112,
  longitude: -46.9286506777171,
  casos: 30,
  nivel: 4
},
{
  geocode: "3513108",
  text: "Cravinhos",
  latitude: -21.342245495879443,
  longitude: -47.7357786485019,
  casos: 0,
  nivel: 1
},
{
  geocode: "3513207",
  text: "Cristais Paulista",
  latitude: -20.405424281905557,
  longitude: -47.42193996128236,
  casos: 0,
  nivel: 1
},
{
  geocode: "3513306",
  text: "Cruzália",
  latitude: -22.743921257775042,
  longitude: -50.79262419697616,
  casos: 0,
  nivel: 1
},
{
  geocode: "3513405",
  text: "Cruzeiro",
  latitude: -22.576511312272054,
  longitude: -44.95903600900574,
  casos: 0,
  nivel: 1
},
{
  geocode: "3513504",
  text: "Cubatão",
  latitude: -23.891692365138923,
  longitude: -46.426586036364526,
  casos: 3,
  nivel: 1
},
{
  geocode: "3513603",
  text: "Cunha",
  latitude: -23.074190864727054,
  longitude: -44.95992945142572,
  casos: 0,
  nivel: 1
},
{
  geocode: "3513702",
  text: "Descalvado",
  latitude: -21.916762155621225,
  longitude: -47.62285294467233,
  casos: 3,
  nivel: 1
},
{
  geocode: "3513801",
  text: "Diadema",
  latitude: -23.686393775755473,
  longitude: -46.6211935822991,
  casos: 38,
  nivel: 1
},
{
  geocode: "3513850",
  text: "Dirce Reis",
  latitude: -20.46331106131131,
  longitude: -50.60250957489232,
  casos: 24,
  nivel: 1
},
{
  geocode: "3513900",
  text: "Divinolândia",
  latitude: -21.661437948070706,
  longitude: -46.73859622212591,
  casos: 0,
  nivel: 1
},
{
  geocode: "3514007",
  text: "Dobrada",
  latitude: -21.518370350657783,
  longitude: -48.393474583518305,
  casos: 1,
  nivel: 1
},
{
  geocode: "3514106",
  text: "Dois Córregos",
  latitude: -22.369128189320097,
  longitude: -48.385139407232835,
  casos: 1,
  nivel: 1
},
{
  geocode: "3514205",
  text: "Dolcinópolis",
  latitude: -20.124635988930425,
  longitude: -50.51374142586825,
  casos: 12,
  nivel: 1
},
{
  geocode: "3514304",
  text: "Dourado",
  latitude: -22.1123190483733,
  longitude: -48.313478529369014,
  casos: 1,
  nivel: 1
},
{
  geocode: "3514403",
  text: "Dracena",
  latitude: -21.48617167096454,
  longitude: -51.53026520375217,
  casos: 19,
  nivel: 1
},
{
  geocode: "3514502",
  text: "Duartina",
  latitude: -22.41526036243394,
  longitude: -49.40906570771075,
  casos: 0,
  nivel: 1
},
{
  geocode: "3514601",
  text: "Dumont",
  latitude: -21.238700387315834,
  longitude: -47.97484816311604,
  casos: 3,
  nivel: 1
},
{
  geocode: "3514700",
  text: "Echaporã",
  latitude: -22.4303812766221,
  longitude: -50.200683870227024,
  casos: 0,
  nivel: 1
},
{
  geocode: "3514809",
  text: "Eldorado",
  latitude: -23.709610634798192,
  longitude: -46.626708587999985,
  casos: 0,
  nivel: 1
},
{
  geocode: "3514908",
  text: "Elias Fausto",
  latitude: -23.042194921213916,
  longitude: -47.369174574801384,
  casos: 9,
  nivel: 1
},
{
  geocode: "3514924",
  text: "Elisiário",
  latitude: -21.166801255140726,
  longitude: -49.10937579799316,
  casos: 0,
  nivel: 1
},
{
  geocode: "3514957",
  text: "Embaúba",
  latitude: -20.981281394835907,
  longitude: -48.838224072856605,
  casos: 0,
  nivel: 1
},
{
  geocode: "3515004",
  text: "Embu das Artes",
  latitude: -23.649817773050785,
  longitude: -46.85262361052909,
  casos: 1,
  nivel: 1
},
{
  geocode: "3515103",
  text: "Embu-Guaçu",
  latitude: -23.830448852224983,
  longitude: -46.81340525840337,
  casos: 0,
  nivel: 1
},
{
  geocode: "3515129",
  text: "Emilianópolis",
  latitude: -21.833603385755,
  longitude: -51.482319630483275,
  casos: 0,
  nivel: 1
},
{
  geocode: "3515152",
  text: "Engenheiro Coelho",
  latitude: -22.488608031963068,
  longitude: -47.21215824892991,
  casos: 0,
  nivel: 1
},
{
  geocode: "3515186",
  text: "Espírito Santo do Pinhal",
  latitude: -22.196620408487075,
  longitude: -46.750028788204496,
  casos: 8,
  nivel: 1
},
{
  geocode: "3515194",
  text: "Espírito Santo do Turvo",
  latitude: -22.69020474898271,
  longitude: -49.428034829958264,
  casos: 0,
  nivel: 1
},
{
  geocode: "3557303",
  text: "Estiva Gerbi",
  latitude: -22.273755948693903,
  longitude: -46.950495210268826,
  casos: 4,
  nivel: 1
},
{
  geocode: "3515202",
  text: "Estrela d'Oeste",
  latitude: -20.286745886794183,
  longitude: -50.39993673794518,
  casos: 37,
  nivel: 1
},
{
  geocode: "3515301",
  text: "Estrela do Norte",
  latitude: -22.48565742632077,
  longitude: -51.661725125552174,
  casos: 0,
  nivel: 1
},
{
  geocode: "3515350",
  text: "Euclides da Cunha Paulista",
  latitude: -22.557202192505713,
  longitude: -52.58939739243729,
  casos: 1,
  nivel: 1
},
{
  geocode: "3515400",
  text: "Fartura",
  latitude: -23.39117486574199,
  longitude: -49.51221965771314,
  casos: 1,
  nivel: 1
},
{
  geocode: "3515509",
  text: "Fernandópolis",
  latitude: -20.28217045588491,
  longitude: -50.25017838127097,
  casos: 35,
  nivel: 1
},
{
  geocode: "3515608",
  text: "Fernando Prestes",
  latitude: -21.2687525654906,
  longitude: -48.68652415071844,
  casos: 0,
  nivel: 1
},
{
  geocode: "3515657",
  text: "Fernão",
  latitude: -22.361361857916638,
  longitude: -49.523348780603186,
  casos: 0,
  nivel: 1
},
{
  geocode: "3515707",
  text: "Ferraz de Vasconcelos",
  latitude: -23.53993561632572,
  longitude: -46.366280823969866,
  casos: 3,
  nivel: 1
},
{
  geocode: "3515806",
  text: "Flora Rica",
  latitude: -21.67673389457594,
  longitude: -51.38050494396859,
  casos: 0,
  nivel: 1
},
{
  geocode: "3515905",
  text: "Floreal",
  latitude: -20.67736338838145,
  longitude: -50.14647096708327,
  casos: 0,
  nivel: 1
},
{
  geocode: "3516002",
  text: "Flórida Paulista",
  latitude: -21.612117835397925,
  longitude: -51.16927170221455,
  casos: 0,
  nivel: 1
},
{
  geocode: "3516101",
  text: "Florínea",
  latitude: -22.90215501674863,
  longitude: -50.72788840670044,
  casos: 0,
  nivel: 1
},
{
  geocode: "3516200",
  text: "Franca",
  latitude: -20.53933452838013,
  longitude: -47.40408234162525,
  casos: 55,
  nivel: 1
},
{
  geocode: "3516309",
  text: "Francisco Morato",
  latitude: -23.27940459849513,
  longitude: -46.74474601180126,
  casos: 0,
  nivel: 1
},
{
  geocode: "3516408",
  text: "Franco da Rocha",
  latitude: -23.32925775327925,
  longitude: -46.726811954916265,
  casos: 19,
  nivel: 4
},
{
  geocode: "3516507",
  text: "Gabriel Monteiro",
  latitude: -21.528588862072077,
  longitude: -50.555530457567556,
  casos: 0,
  nivel: 1
},
{
  geocode: "3516606",
  text: "Gália",
  latitude: -22.291334165823027,
  longitude: -49.55221879221125,
  casos: 0,
  nivel: 1
},
{
  geocode: "3516705",
  text: "Garça",
  latitude: -22.213019511406042,
  longitude: -49.655671413953115,
  casos: 7,
  nivel: 1
},
{
  geocode: "3516804",
  text: "Gastão Vidigal",
  latitude: -20.798967366883875,
  longitude: -50.18761410899018,
  casos: 0,
  nivel: 1
},
{
  geocode: "3516853",
  text: "Gavião Peixoto",
  latitude: -21.83582936624112,
  longitude: -48.492878777376596,
  casos: 2,
  nivel: 1
},
{
  geocode: "3516903",
  text: "General Salgado",
  latitude: -20.64532629681802,
  longitude: -50.362521395097126,
  casos: 1,
  nivel: 1
},
{
  geocode: "3517000",
  text: "Getulina",
  latitude: -21.79926088109237,
  longitude: -49.930184336889845,
  casos: 0,
  nivel: 1
},
{
  geocode: "3517109",
  text: "Glicério",
  latitude: -21.37984559882369,
  longitude: -50.21353129461416,
  casos: 14,
  nivel: 1
},
{
  geocode: "3517208",
  text: "Guaiçara",
  latitude: -21.62307068931566,
  longitude: -49.797647683269524,
  casos: 2,
  nivel: 1
},
{
  geocode: "3517307",
  text: "Guaimbê",
  latitude: -21.91109507411504,
  longitude: -49.89768231542044,
  casos: 0,
  nivel: 1
},
{
  geocode: "3517406",
  text: "Guaíra",
  latitude: -24.083605485577497,
  longitude: -54.24385177109011,
  casos: 28,
  nivel: 1
},
{
  geocode: "3517505",
  text: "Guapiaçu",
  latitude: -20.792844945409996,
  longitude: -49.22055206858272,
  casos: 10,
  nivel: 1
},
{
  geocode: "3517604",
  text: "Guapiara",
  latitude: -24.18702034799415,
  longitude: -48.53322804215212,
  casos: 0,
  nivel: 1
},
{
  geocode: "3518800",
  text: "Guarulhos",
  latitude: -23.459680803310828,
  longitude: -46.53375101528942,
  casos: 104,
  nivel: 1
},
{
  geocode: "3529401",
  text: "Mauá",
  latitude: -23.66648612398863,
  longitude: -46.4602868197291,
  casos: 27,
  nivel: 1
},
{
  geocode: "3548708",
  text: "São Bernardo do Campo",
  latitude: -23.699854678991436,
  longitude: -46.55103683460302,
  casos: 0,
  nivel: 1
},
{
  geocode: "3536208",
  text: "Pariquera-Açu",
  latitude: -24.713764052982967,
  longitude: -47.88492333034668,  
  "casos": 3,
  "nivel": 2
},
{
  geocode: "3520400",
  text: "Ilhabela",
  latitude: -23.816514369563013,
  longitude: -45.36678269888525,  
  "casos": 59,
  "nivel": 2
},
{
  geocode: "3534401",
  text: "Osasco",
  latitude: -23.531827175850065,
  longitude: -46.79131365229269,
  casos: 17,
  nivel: 1
},
{
  geocode: "3550704",
  text: "São Sebastião",
  latitude: -23.80120174875836,
  longitude: -45.40180161760842,   
  "casos": 78,
  "nivel": 2
},
{
  geocode: "3547809",
  text: "Santo André",
  latitude: -23.687112511562137,
  longitude: -46.49360407267032,
  casos: 9,
  nivel: 1
   }  
    ],
  },
];

export default statesAndCities;
