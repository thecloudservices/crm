// data.js — MapLeads Pro v2 — World Data

const WORLD_DATA = [
  { code:'AF', name:'Afghanistan', states:[] },
  { code:'AL', name:'Albania', states:[] },
  { code:'DZ', name:'Algeria', states:[
    {name:'Algiers',cities:['Algiers','Bab Ezzouar','Ain Taya']},
    {name:'Oran',cities:['Oran','Es Senia','Bir El Djir']},
    {name:'Constantine',cities:['Constantine','El Khroub','Ain Smara']}
  ]},
  { code:'AO', name:'Angola', states:[] },
  { code:'AR', name:'Argentina', states:[
    {name:'Buenos Aires',cities:['Buenos Aires','La Plata','Mar del Plata','Quilmes']},
    {name:'Córdoba',cities:['Córdoba','Villa Carlos Paz','Río Cuarto']},
    {name:'Santa Fe',cities:['Rosario','Santa Fe','Rafaela']},
    {name:'Mendoza',cities:['Mendoza','San Rafael','Godoy Cruz']},
    {name:'Tucumán',cities:['San Miguel de Tucumán','Yerba Buena']}
  ]},
  { code:'AU', name:'Australia', states:[
    {name:'New South Wales',cities:['Sydney','Newcastle','Wollongong','Parramatta','Penrith','Blacktown','Liverpool','Campbelltown']},
    {name:'Victoria',cities:['Melbourne','Geelong','Ballarat','Bendigo','Frankston','Dandenong','Sunshine']},
    {name:'Queensland',cities:['Brisbane','Gold Coast','Sunshine Coast','Townsville','Cairns','Toowoomba','Rockhampton']},
    {name:'Western Australia',cities:['Perth','Fremantle','Mandurah','Bunbury','Geraldton','Kalgoorlie']},
    {name:'South Australia',cities:['Adelaide','Mount Gambier','Whyalla','Murray Bridge']},
    {name:'Tasmania',cities:['Hobart','Launceston','Devonport','Burnie']},
    {name:'Northern Territory',cities:['Darwin','Alice Springs','Palmerston']},
    {name:'Australian Capital Territory',cities:['Canberra','Belconnen','Tuggeranong']}
  ]},
  { code:'AT', name:'Austria', states:[
    {name:'Vienna',cities:['Vienna']},
    {name:'Upper Austria',cities:['Linz','Wels','Steyr']},
    {name:'Styria',cities:['Graz','Leoben','Kapfenberg']},
    {name:'Salzburg',cities:['Salzburg','Hallein']},
    {name:'Tyrol',cities:['Innsbruck','Kufstein','Wörgl']},
    {name:'Carinthia',cities:['Klagenfurt','Villach']},
    {name:'Lower Austria',cities:['St. Pölten','Krems','Wiener Neustadt']},
    {name:'Vorarlberg',cities:['Bregenz','Dornbirn','Feldkirch']},
    {name:'Burgenland',cities:['Eisenstadt','Oberwart']}
  ]},
  { code:'AZ', name:'Azerbaijan', states:[
    {name:'Baku',cities:['Baku','Sumqayit','Khirdalan']},
    {name:'Ganja-Gazakh',cities:['Ganja','Nakhchivan']}
  ]},
  { code:'BH', name:'Bahrain', states:[
    {name:'Capital',cities:['Manama']},
    {name:'Northern',cities:['Muharraq','Hamad Town','Riffa']}
  ]},
  { code:'BD', name:'Bangladesh', states:[
    {name:'Dhaka',cities:['Dhaka','Narayanganj','Gazipur','Manikganj','Munshiganj']},
    {name:'Chittagong',cities:['Chittagong','Cox\'s Bazar','Comilla','Feni']},
    {name:'Rajshahi',cities:['Rajshahi','Bogura','Pabna','Sirajganj']},
    {name:'Khulna',cities:['Khulna','Jessore','Satkhira','Kushtia']},
    {name:'Sylhet',cities:['Sylhet','Moulvibazar','Habiganj','Sunamganj']},
    {name:'Barisal',cities:['Barisal','Bhola','Patuakhali','Jhalokati']},
    {name:'Rangpur',cities:['Rangpur','Dinajpur','Gaibandha','Kurigram']},
    {name:'Mymensingh',cities:['Mymensingh','Jamalpur','Netrokona','Sherpur']}
  ]},
  { code:'BE', name:'Belgium', states:[
    {name:'Brussels',cities:['Brussels','Anderlecht','Molenbeek-Saint-Jean']},
    {name:'Antwerp',cities:['Antwerp','Mechelen','Turnhout','Lier']},
    {name:'East Flanders',cities:['Ghent','Aalst','Sint-Niklaas','Dendermonde']},
    {name:'West Flanders',cities:['Bruges','Kortrijk','Roeselare','Ostend']},
    {name:'Liège',cities:['Liège','Verviers','Seraing','Herstal']},
    {name:'Hainaut',cities:['Charleroi','Mons','La Louvière','Tournai']}
  ]},
  { code:'BR', name:'Brazil', states:[
    {name:'São Paulo',cities:['São Paulo','Campinas','Santos','Guarulhos','Ribeirão Preto','Sorocaba','Osasco']},
    {name:'Rio de Janeiro',cities:['Rio de Janeiro','Niterói','Nova Iguaçu','Duque de Caxias','Belford Roxo']},
    {name:'Bahia',cities:['Salvador','Feira de Santana','Vitória da Conquista','Camaçari']},
    {name:'Minas Gerais',cities:['Belo Horizonte','Uberlândia','Contagem','Juiz de Fora','Betim']},
    {name:'Paraná',cities:['Curitiba','Londrina','Maringá','Ponta Grossa','Cascavel']},
    {name:'Rio Grande do Sul',cities:['Porto Alegre','Caxias do Sul','Pelotas','Canoas','Santa Maria']},
    {name:'Pernambuco',cities:['Recife','Olinda','Caruaru','Petrolina','Paulista']},
    {name:'Ceará',cities:['Fortaleza','Caucaia','Juazeiro do Norte','Sobral']},
    {name:'Pará',cities:['Belém','Ananindeua','Santarém','Marabá']},
    {name:'Goiás',cities:['Goiânia','Aparecida de Goiânia','Anápolis','Rio Verde']}
  ]},
  { code:'CA', name:'Canada', states:[
    {name:'Ontario',cities:['Toronto','Ottawa','Mississauga','Brampton','Hamilton','London','Markham','Vaughan','Kitchener','Windsor','Oakville','Burlington','Sudbury','Oshawa']},
    {name:'Quebec',cities:['Montreal','Quebec City','Laval','Gatineau','Longueuil','Sherbrooke','Saguenay','Lévis','Trois-Rivières']},
    {name:'British Columbia',cities:['Vancouver','Surrey','Burnaby','Richmond','Kelowna','Abbotsford','Coquitlam','Victoria','Langley','Nanaimo']},
    {name:'Alberta',cities:['Calgary','Edmonton','Red Deer','Lethbridge','St. Albert','Medicine Hat','Grande Prairie','Airdrie','Spruce Grove']},
    {name:'Manitoba',cities:['Winnipeg','Brandon','Steinbach','Thompson','Portage la Prairie']},
    {name:'Saskatchewan',cities:['Saskatoon','Regina','Prince Albert','Moose Jaw','Swift Current']},
    {name:'Nova Scotia',cities:['Halifax','Dartmouth','Sydney','Truro','New Glasgow']},
    {name:'New Brunswick',cities:['Moncton','Saint John','Fredericton','Dieppe','Miramichi']},
    {name:'Newfoundland and Labrador',cities:['St. John\'s','Mount Pearl','Corner Brook','Conception Bay South']},
    {name:'Prince Edward Island',cities:['Charlottetown','Summerside']},
    {name:'Northwest Territories',cities:['Yellowknife','Hay River']},
    {name:'Yukon',cities:['Whitehorse','Dawson City']},
    {name:'Nunavut',cities:['Iqaluit','Rankin Inlet']}
  ]},
  { code:'CL', name:'Chile', states:[
    {name:'Metropolitan',cities:['Santiago','Puente Alto','Antofagasta','San Bernardo']},
    {name:'Valparaíso',cities:['Valparaíso','Viña del Mar','Quilpué','Villa Alemana']},
    {name:'Biobío',cities:['Concepción','Talcahuano','Chillán']},
    {name:'La Araucanía',cities:['Temuco','Padre Las Casas','Villarrica']}
  ]},
  { code:'CN', name:'China', states:[
    {name:'Beijing',cities:['Beijing','Tongzhou','Changping']},
    {name:'Shanghai',cities:['Shanghai','Pudong','Minhang','Baoshan']},
    {name:'Guangdong',cities:['Guangzhou','Shenzhen','Dongguan','Foshan','Zhuhai','Shantou']},
    {name:'Sichuan',cities:['Chengdu','Mianyang','Deyang','Zigong']},
    {name:'Zhejiang',cities:['Hangzhou','Ningbo','Wenzhou','Jiaxing','Shaoxing']},
    {name:'Jiangsu',cities:['Nanjing','Suzhou','Wuxi','Changzhou','Nantong']},
    {name:'Shandong',cities:['Jinan','Qingdao','Linyi','Weifang','Zibo']},
    {name:'Henan',cities:['Zhengzhou','Luoyang','Xinxiang','Nanyang']},
    {name:'Hubei',cities:['Wuhan','Xiangyang','Yichang']},
    {name:'Hunan',cities:['Changsha','Zhuzhou','Xiangtan']},
    {name:'Xinjiang',cities:['Ürümqi','Kashgar','Korla']},
    {name:'Yunnan',cities:['Kunming','Qujing','Lijiang']},
    {name:'Liaoning',cities:['Shenyang','Dalian','Anshan','Fushun']},
    {name:'Shaanxi',cities:['Xi\'an','Xianyang','Baoji']},
    {name:'Fujian',cities:['Fuzhou','Xiamen','Quanzhou']},
    {name:'Tianjin',cities:['Tianjin','Tanggu','Binhai']},
    {name:'Chongqing',cities:['Chongqing']},
    {name:'Hong Kong',cities:['Hong Kong','Kowloon','Tsuen Wan','Tuen Mun']}
  ]},
  { code:'CO', name:'Colombia', states:[
    {name:'Cundinamarca',cities:['Bogotá','Soacha','Facatativá','Zipaquirá']},
    {name:'Antioquia',cities:['Medellín','Bello','Itagüí','Envigado','Apartadó']},
    {name:'Valle del Cauca',cities:['Cali','Palmira','Buenaventura','Tuluá']},
    {name:'Atlántico',cities:['Barranquilla','Soledad','Malambo']},
    {name:'Bolívar',cities:['Cartagena','Magangué','Turbaco']},
    {name:'Santander',cities:['Bucaramanga','Floridablanca','Girón','Piedecuesta']}
  ]},
  { code:'CY', name:'Cyprus', states:[
    {name:'Nicosia',cities:['Nicosia','Strovolos','Lakatamia']},
    {name:'Limassol',cities:['Limassol','Germasogeia']},
    {name:'Larnaca',cities:['Larnaca','Livadia']},
    {name:'Paphos',cities:['Paphos','Peyia']},
    {name:'Famagusta',cities:['Famagusta','Paralimni','Dherynia']}
  ]},
  { code:'CZ', name:'Czech Republic', states:[
    {name:'Prague',cities:['Prague']},
    {name:'South Moravian',cities:['Brno','Zlín','Jihlava']},
    {name:'Moravian-Silesian',cities:['Ostrava','Opava','Havířov','Karviná']},
    {name:'Central Bohemian',cities:['Kladno','České Budějovice','Plzeň']}
  ]},
  { code:'DK', name:'Denmark', states:[
    {name:'Capital Region',cities:['Copenhagen','Frederiksberg','Roskilde','Helsingør']},
    {name:'Central Denmark',cities:['Aarhus','Silkeborg','Viborg','Horsens']},
    {name:'Southern Denmark',cities:['Odense','Esbjerg','Vejle','Fredericia']},
    {name:'North Denmark',cities:['Aalborg','Frederikshavn','Hjørring']},
    {name:'Zealand',cities:['Roskilde','Køge','Holbæk','Slagelse']}
  ]},
  { code:'EG', name:'Egypt', states:[
    {name:'Cairo',cities:['Cairo','Heliopolis','Maadi','Nasr City','New Cairo']},
    {name:'Giza',cities:['Giza','6th of October City','El Sheikh Zayed']},
    {name:'Alexandria',cities:['Alexandria','El Maamoura','Sidi Gaber']},
    {name:'Sharkia',cities:['Zagazig','10th of Ramadan','Abu Hammad']},
    {name:'Dakahlia',cities:['Mansoura','Talkha','Mit Ghamr']},
    {name:'Qalyubia',cities:['Banha','Shubra El Kheima','Qalyub']},
    {name:'Gharbia',cities:['Tanta','El Mahalla El Kubra','Kafr El Zayat']},
    {name:'Beheira',cities:['Damanhour','Kafr El Dawwar','Rashid']},
    {name:'Kafr El Sheikh',cities:['Kafr El Sheikh','Desouk','Fuwwah']},
    {name:'Menofia',cities:['Shibin El Kom','Menouf','Sadat City']},
    {name:'Red Sea',cities:['Hurghada','Safaga','Marsa Alam']},
    {name:'South Sinai',cities:['Sharm El Sheikh','Dahab','Nuweiba']}
  ]},
  { code:'ET', name:'Ethiopia', states:[] },
  { code:'FI', name:'Finland', states:[
    {name:'Uusimaa',cities:['Helsinki','Espoo','Vantaa','Tampere','Lahti']},
    {name:'Southwest Finland',cities:['Turku','Naantali','Raisio']},
    {name:'Pirkanmaa',cities:['Tampere','Nokia','Ylöjärvi']},
    {name:'North Ostrobothnia',cities:['Oulu','Kempele','Haukipudas']},
    {name:'Lapland',cities:['Rovaniemi','Kemi','Tornio']}
  ]},
  { code:'FR', name:'France', states:[
    {name:'Île-de-France',cities:['Paris','Versailles','Boulogne-Billancourt','Saint-Denis','Argenteuil','Montreuil','Créteil','Nanterre','Vincennes']},
    {name:'Auvergne-Rhône-Alpes',cities:['Lyon','Grenoble','Saint-Étienne','Clermont-Ferrand','Villeurbanne','Annecy','Chambéry']},
    {name:'Nouvelle-Aquitaine',cities:['Bordeaux','Limoges','Poitiers','Pau','La Rochelle','Bayonne']},
    {name:'Occitanie',cities:['Toulouse','Montpellier','Nîmes','Perpignan','Narbonne','Carcassonne']},
    {name:'Hauts-de-France',cities:['Lille','Amiens','Roubaix','Tourcoing','Douai','Dunkirk']},
    {name:'Grand Est',cities:['Strasbourg','Reims','Metz','Mulhouse','Nancy','Troyes']},
    {name:'Provence-Alpes-Côte d\'Azur',cities:['Marseille','Nice','Toulon','Aix-en-Provence','Cannes','Antibes']},
    {name:'Pays de la Loire',cities:['Nantes','Angers','Le Mans','Saint-Nazaire','La Roche-sur-Yon']},
    {name:'Bretagne',cities:['Rennes','Brest','Quimper','Lorient','Vannes']},
    {name:'Normandie',cities:['Rouen','Caen','Le Havre','Cherbourg']},
    {name:'Bourgogne-Franche-Comté',cities:['Dijon','Besançon','Belfort','Chalon-sur-Saône']},
    {name:'Centre-Val de Loire',cities:['Tours','Orléans','Bourges','Blois']}
  ]},
  { code:'DE', name:'Germany', states:[
    {name:'Bavaria',cities:['Munich','Nuremberg','Augsburg','Regensburg','Ingolstadt','Würzburg','Fürth']},
    {name:'North Rhine-Westphalia',cities:['Cologne','Düsseldorf','Dortmund','Essen','Duisburg','Bochum','Wuppertal','Bielefeld','Bonn','Münster','Gelsenkirchen','Aachen']},
    {name:'Baden-Württemberg',cities:['Stuttgart','Karlsruhe','Mannheim','Freiburg','Heidelberg','Ulm','Heilbronn','Pforzheim']},
    {name:'Berlin',cities:['Berlin','Charlottenburg','Spandau','Mitte','Kreuzberg','Prenzlauer Berg']},
    {name:'Hamburg',cities:['Hamburg','Harburg','Wandsbek','Altona']},
    {name:'Saxony',cities:['Leipzig','Dresden','Chemnitz','Zwickau','Erfurt']},
    {name:'Hesse',cities:['Frankfurt','Wiesbaden','Kassel','Darmstadt','Hanau','Offenbach']},
    {name:'Lower Saxony',cities:['Hanover','Braunschweig','Osnabrück','Göttingen','Wolfsburg','Oldenburg']},
    {name:'Brandenburg',cities:['Potsdam','Brandenburg','Cottbus','Frankfurt (Oder)']},
    {name:'Saxony-Anhalt',cities:['Halle','Magdeburg','Dessau']},
    {name:'Thuringia',cities:['Erfurt','Jena','Gera','Weimar']},
    {name:'Schleswig-Holstein',cities:['Kiel','Lübeck','Flensburg']},
    {name:'Rhineland-Palatinate',cities:['Mainz','Ludwigshafen','Koblenz','Trier']},
    {name:'Saarland',cities:['Saarbrücken','Neunkirchen','Homburg']},
    {name:'Mecklenburg-Vorpommern',cities:['Rostock','Schwerin','Greifswald']},
    {name:'Bremen',cities:['Bremen','Bremerhaven']}
  ]},
  { code:'GH', name:'Ghana', states:[
    {name:'Greater Accra',cities:['Accra','Tema','Madina','Teshie']},
    {name:'Ashanti',cities:['Kumasi','Obuasi','Ejisu','Konongo']},
    {name:'Western',cities:['Takoradi','Sekondi','Tarkwa']},
    {name:'Central',cities:['Cape Coast','Elmina','Mankessim']},
    {name:'Eastern',cities:['Koforidua','Nkawkaw','Akim Oda']}
  ]},
  { code:'GR', name:'Greece', states:[
    {name:'Attica',cities:['Athens','Piraeus','Peristeri','Kallithea','Nikaia','Glyfada','Ilioupoli']},
    {name:'Central Macedonia',cities:['Thessaloniki','Kavala','Serres','Katerini']},
    {name:'Crete',cities:['Heraklion','Chania','Rethymno','Agios Nikolaos']},
    {name:'Western Greece',cities:['Patras','Agrinion','Pyrgos']},
    {name:'Thessaly',cities:['Larissa','Volos','Trikala','Karditsa']},
    {name:'Epirus',cities:['Ioannina','Preveza','Arta']}
  ]},
  { code:'HK', name:'Hong Kong', states:[
    {name:'Kowloon',cities:['Mong Kok','Tsim Sha Tsui','Wong Tai Sin','Kowloon City']},
    {name:'Hong Kong Island',cities:['Central','Wan Chai','Causeway Bay','North Point','Quarry Bay']},
    {name:'New Territories',cities:['Tuen Mun','Yuen Long','Sha Tin','Tai Po','Sai Kung']}
  ]},
  { code:'HU', name:'Hungary', states:[
    {name:'Budapest',cities:['Budapest']},
    {name:'Pest',cities:['Érd','Gödöllő','Vác','Dunakeszi']},
    {name:'Hajdú-Bihar',cities:['Debrecen','Hajdúböszörmény']},
    {name:'Borsod-Abaúj-Zemplén',cities:['Miskolc','Kazincbarcika','Eger']},
    {name:'Győr-Moson-Sopron',cities:['Győr','Sopron','Mosonmagyaróvár']},
    {name:'Baranya',cities:['Pécs','Komló']},
    {name:'Csongrád-Csanád',cities:['Szeged','Hódmezővásárhely']},
    {name:'Fejér',cities:['Székesfehérvár','Dunaújváros']},
    {name:'Zala',cities:['Zalaegerszeg','Nagykanizsa']}
  ]},
  { code:'IN', name:'India', states:[
    {name:'Maharashtra',cities:['Mumbai','Pune','Nagpur','Thane','Nashik','Aurangabad','Solapur','Navi Mumbai','Vasai-Virar','Kolhapur']},
    {name:'Uttar Pradesh',cities:['Lucknow','Kanpur','Agra','Varanasi','Allahabad','Ghaziabad','Noida','Meerut','Bareilly','Aligarh','Moradabad','Firozabad']},
    {name:'Delhi',cities:['New Delhi','Delhi','Dwarka','Rohini','Laxmi Nagar','Nehru Place','Connaught Place','Karol Bagh','Janakpuri']},
    {name:'Karnataka',cities:['Bengaluru','Mysore','Hubli','Mangalore','Belgaum','Davanagere','Bellary','Gulbarga']},
    {name:'Tamil Nadu',cities:['Chennai','Coimbatore','Madurai','Tiruchirappalli','Salem','Tirunelveli','Tirupur','Vellore','Erode']},
    {name:'West Bengal',cities:['Kolkata','Howrah','Asansol','Siliguri','Durgapur','Bardhaman','Malda','Barasat']},
    {name:'Gujarat',cities:['Ahmedabad','Surat','Vadodara','Rajkot','Bhavnagar','Jamnagar','Junagadh','Gandhinagar']},
    {name:'Rajasthan',cities:['Jaipur','Jodhpur','Kota','Bikaner','Ajmer','Udaipur','Bharatpur','Alwar']},
    {name:'Andhra Pradesh',cities:['Visakhapatnam','Vijayawada','Guntur','Nellore','Kurnool','Rajahmundry','Tirupati']},
    {name:'Telangana',cities:['Hyderabad','Secunderabad','Warangal','Nizamabad','Karimnagar','Khammam']},
    {name:'Madhya Pradesh',cities:['Bhopal','Indore','Gwalior','Jabalpur','Ujjain','Sagar','Dewas','Satna']},
    {name:'Punjab',cities:['Ludhiana','Amritsar','Jalandhar','Patiala','Bathinda','Mohali','Firozpur']},
    {name:'Haryana',cities:['Faridabad','Gurgaon','Panipat','Ambala','Yamunanagar','Rohtak','Hisar','Karnal']},
    {name:'Bihar',cities:['Patna','Gaya','Bhagalpur','Muzaffarpur','Purnia','Darbhanga','Arrah']},
    {name:'Odisha',cities:['Bhubaneswar','Cuttack','Rourkela','Brahmapur','Sambalpur','Puri']},
    {name:'Assam',cities:['Guwahati','Silchar','Dibrugarh','Jorhat','Nagaon','Tinsukia']},
    {name:'Jharkhand',cities:['Ranchi','Jamshedpur','Dhanbad','Bokaro','Deoghar']},
    {name:'Himachal Pradesh',cities:['Shimla','Dharamshala','Solan','Mandi','Palampur']},
    {name:'Uttarakhand',cities:['Dehradun','Haridwar','Roorkee','Haldwani','Kashipur','Rishikesh']},
    {name:'Chhattisgarh',cities:['Raipur','Bhilai','Bilaspur','Durg','Korba','Raigarh']},
    {name:'Goa',cities:['Panaji','Margao','Vasco','Mapusa','Ponda']},
    {name:'Jammu & Kashmir',cities:['Srinagar','Jammu','Anantnag','Baramulla','Sopore']},
    {name:'Kerala',cities:['Thiruvananthapuram','Kochi','Kozhikode','Thrissur','Kollam','Palakkad','Malappuram','Kottayam','Alappuzha']},
    {name:'Himachal Pradesh',cities:['Shimla','Dharamshala','Kullu','Manali','Solan']},
    {name:'Arunachal Pradesh',cities:['Itanagar','Naharlagun','Pasighat']},
    {name:'Manipur',cities:['Imphal','Thoubal','Bishnupur']},
    {name:'Meghalaya',cities:['Shillong','Tura','Nongpoh']},
    {name:'Mizoram',cities:['Aizawl','Lunglei','Champhai']},
    {name:'Nagaland',cities:['Kohima','Dimapur','Mokokchung']},
    {name:'Sikkim',cities:['Gangtok','Namchi','Gyalshing']},
    {name:'Tripura',cities:['Agartala','Udaipur','Dharmanagar']}
  ]},
  { code:'ID', name:'Indonesia', states:[
    {name:'DKI Jakarta',cities:['Jakarta','North Jakarta','South Jakarta','East Jakarta','West Jakarta']},
    {name:'West Java',cities:['Bandung','Bekasi','Depok','Bogor','Cimahi','Tasikmalaya','Sukabumi']},
    {name:'East Java',cities:['Surabaya','Malang','Madiun','Kediri','Jember','Blitar','Mojokerto']},
    {name:'Central Java',cities:['Semarang','Solo','Yogyakarta','Magelang','Salatiga','Kudus']},
    {name:'North Sumatra',cities:['Medan','Binjai','Pematang Siantar','Tebing Tinggi']},
    {name:'South Sulawesi',cities:['Makassar','Parepare','Palopo','Pinrang']},
    {name:'Bali',cities:['Denpasar','Kuta','Seminyak','Ubud','Singaraja','Gianyar']},
    {name:'South Sumatra',cities:['Palembang','Prabumulih','Lubuklinggau']},
    {name:'Riau',cities:['Pekanbaru','Dumai','Bangkinang']},
    {name:'West Kalimantan',cities:['Pontianak','Singkawang']},
    {name:'East Kalimantan',cities:['Balikpapan','Samarinda','Bontang']},
    {name:'Papua',cities:['Jayapura','Sorong','Manokwari']}
  ]},
  { code:'IR', name:'Iran', states:[
    {name:'Tehran',cities:['Tehran','Karaj','Varamin','Eslamshahr']},
    {name:'Isfahan',cities:['Isfahan','Kashan','Najafabad','Khorramabad']},
    {name:'Razavi Khorasan',cities:['Mashhad','Nishapur','Sabzevar','Torbat-e Heydarieh']},
    {name:'Fars',cities:['Shiraz','Marvdasht','Kazerun','Jahrom']},
    {name:'East Azerbaijan',cities:['Tabriz','Maragheh','Mianeh','Marand']},
    {name:'Khuzestan',cities:['Ahvaz','Abadan','Dezful','Khorramshahr','Masjed Soleyman']},
    {name:'Gilan',cities:['Rasht','Bandar Anzali','Astara','Lahijan']},
    {name:'Kerman',cities:['Kerman','Sirjan','Rafsanjan','Jiroft']},
    {name:'Alborz',cities:['Karaj','Fardis','Nazar Abad']},
    {name:'Hormozgan',cities:['Bandar Abbas','Minab','Qeshm']}
  ]},
  { code:'IQ', name:'Iraq', states:[
    {name:'Baghdad',cities:['Baghdad','Sadr City','Adhamiyah','Karkh']},
    {name:'Basra',cities:['Basra','Al-Faw','Al-Zubair']},
    {name:'Nineveh',cities:['Mosul','Tal Afar','Sinjar']},
    {name:'Erbil',cities:['Erbil','Rawanduz','Koya']},
    {name:'Sulaymaniyah',cities:['Sulaymaniyah','Halabja','Ranya']},
    {name:'Dohuk',cities:['Dohuk','Zakho','Amadiya']},
    {name:'Anbar',cities:['Ramadi','Fallujah','Haditha']},
    {name:'Kirkuk',cities:['Kirkuk','Hawija','Dibis']},
    {name:'Diyala',cities:['Baquba','Khalis','Khanaqin']},
    {name:'Karbala',cities:['Karbala','Ain Tamr']},
    {name:'Najaf',cities:['Najaf','Kufa','Manathira']},
    {name:'Babylon',cities:['Hillah','Mahawil','Musayyib']}
  ]},
  { code:'IE', name:'Ireland', states:[
    {name:'Leinster',cities:['Dublin','Drogheda','Dundalk','Navan','Bray','Naas','Portlaoise','Kilkenny']},
    {name:'Munster',cities:['Cork','Limerick','Waterford','Clonmel','Ennis','Tralee']},
    {name:'Connacht',cities:['Galway','Sligo','Castlebar','Athlone','Tuam']},
    {name:'Ulster',cities:['Letterkenny','Monaghan','Cavan']}
  ]},
  { code:'IL', name:'Israel', states:[
    {name:'Tel Aviv',cities:['Tel Aviv','Bat Yam','Holon','Ramat Gan','Petah Tikva','Bnei Brak']},
    {name:'Jerusalem',cities:['Jerusalem','Beit Shemesh','Ma\'ale Adumim']},
    {name:'Haifa',cities:['Haifa','Krayot','Kiryat Bialik','Acre','Nahariya']},
    {name:'Central District',cities:['Rishon LeZion','Rehovot','Ashdod','Lod','Ramla','Herzliya','Netanya']},
    {name:'Southern District',cities:['Be\'er Sheva','Ashkelon','Sderot','Arad','Eilat']},
    {name:'Northern District',cities:['Nazareth','Tiberias','Afula','Carmiel','Safed']}
  ]},
  { code:'IT', name:'Italy', states:[
    {name:'Lombardy',cities:['Milan','Brescia','Bergamo','Monza','Como','Varese','Pavia','Cremona']},
    {name:'Lazio',cities:['Rome','Latina','Frosinone','Viterbo','Rieti']},
    {name:'Campania',cities:['Naples','Salerno','Caserta','Pozzuoli','Torre del Greco','Giugliano']},
    {name:'Sicily',cities:['Palermo','Catania','Messina','Siracusa','Trapani','Ragusa','Agrigento']},
    {name:'Veneto',cities:['Venice','Verona','Padova','Vicenza','Treviso','Rovigo']},
    {name:'Piedmont',cities:['Turin','Novara','Cuneo','Alessandria','Asti','Alba']},
    {name:'Emilia-Romagna',cities:['Bologna','Modena','Parma','Reggio Emilia','Ferrara','Rimini','Piacenza']},
    {name:'Tuscany',cities:['Florence','Prato','Livorno','Siena','Arezzo','Pistoia','Pisa','Grosseto']},
    {name:'Puglia',cities:['Bari','Taranto','Foggia','Lecce','Brindisi','Andria']},
    {name:'Calabria',cities:['Reggio Calabria','Catanzaro','Cosenza','Crotone','Vibo Valentia']},
    {name:'Sardinia',cities:['Cagliari','Sassari','Quartu Sant\'Elena','Nuoro','Oristano']},
    {name:'Liguria',cities:['Genoa','La Spezia','Savona','Imperia']},
    {name:'Marche',cities:['Ancona','Pesaro','Ascoli Piceno','Fano']},
    {name:'Abruzzo',cities:['Pescara','L\'Aquila','Chieti','Teramo']}
  ]},
  { code:'JP', name:'Japan', states:[
    {name:'Tokyo',cities:['Tokyo','Shinjuku','Shibuya','Roppongi','Akihabara','Harajuku','Ikebukuro','Shinagawa','Asakusa']},
    {name:'Osaka',cities:['Osaka','Namba','Umeda','Shinsaibashi','Tennoji','Sakai']},
    {name:'Kanagawa',cities:['Yokohama','Kawasaki','Sagamihara','Fujisawa','Atsugi']},
    {name:'Aichi',cities:['Nagoya','Toyota','Okazaki','Ichinomiya','Kasugai']},
    {name:'Saitama',cities:['Saitama','Kawaguchi','Tokorozawa','Kawagoe','Koshigaya']},
    {name:'Chiba',cities:['Chiba','Matsudo','Funabashi','Kashiwa','Urayasu','Ichikawa']},
    {name:'Hyogo',cities:['Kobe','Himeji','Nishinomiya','Amagasaki','Akashi']},
    {name:'Hokkaido',cities:['Sapporo','Asahikawa','Hakodate','Tomakomai','Kushiro']},
    {name:'Fukuoka',cities:['Fukuoka','Kitakyushu','Kurume','Omuta']},
    {name:'Kyoto',cities:['Kyoto','Uji','Fushimi','Arashiyama']},
    {name:'Hiroshima',cities:['Hiroshima','Fukuyama','Kure','Higashihiroshima']},
    {name:'Miyagi',cities:['Sendai','Ishinomaki','Osaki','Natori']},
    {name:'Okinawa',cities:['Naha','Okinawa City','Urasoe','Ginowan']}
  ]},
  { code:'JO', name:'Jordan', states:[
    {name:'Amman',cities:['Amman','Zarqa','Russeifa','Wadi Seer']},
    {name:'Zarqa',cities:['Zarqa','Russeifa']},
    {name:'Irbid',cities:['Irbid','Ramtha']},
    {name:'Aqaba',cities:['Aqaba']}
  ]},
  { code:'KZ', name:'Kazakhstan', states:[
    {name:'Almaty',cities:['Almaty','Karaganda','Shymkent']},
    {name:'Nur-Sultan',cities:['Nur-Sultan (Astana)']},
    {name:'Shymkent',cities:['Shymkent','Turkestan']},
    {name:'Karaganda',cities:['Karaganda','Temirtau','Balkhash']}
  ]},
  { code:'KE', name:'Kenya', states:[
    {name:'Nairobi',cities:['Nairobi','Westlands','Karen','Kasarani','Embakasi']},
    {name:'Mombasa',cities:['Mombasa','Nyali','Bamburi','Likoni']},
    {name:'Kisumu',cities:['Kisumu','Mamboleo','Kondele']},
    {name:'Nakuru',cities:['Nakuru','Naivasha','Gilgil']},
    {name:'Uasin Gishu',cities:['Eldoret','Kapseret']},
    {name:'Kiambu',cities:['Thika','Ruiru','Limuru','Kikuyu']}
  ]},
  { code:'KW', name:'Kuwait', states:[
    {name:'Kuwait City',cities:['Kuwait City','Salmiya','Hawalli','Fintas']},
    {name:'Ahmadi',cities:['Ahmadi','Fahaheel','Mahboula']},
    {name:'Hawalli',cities:['Salmiya','Rumaithiya','Bayan']},
    {name:'Farwaniya',cities:['Farwaniya','Khaitan','Firdous']},
    {name:'Jahra',cities:['Jahra','Qasr','Naeem']},
    {name:'Mubarak Al-Kabeer',cities:['Abu Halifa','Sabahiya','Fnaitees']}
  ]},
  { code:'LB', name:'Lebanon', states:[
    {name:'Beirut',cities:['Beirut','Hamra','Achrafieh','Verdun','Downtown']},
    {name:'Mount Lebanon',cities:['Jounieh','Baabda','Metn','Chouf','Aley']},
    {name:'North Lebanon',cities:['Tripoli','Zgharta','Byblos','Koura']},
    {name:'South Lebanon',cities:['Sidon','Tyre','Nabatieh']},
    {name:'Bekaa',cities:['Zahle','Baalbek','Chtaura']}
  ]},
  { code:'LY', name:'Libya', states:[
    {name:'Tripoli',cities:['Tripoli','Tajoura','Janzour']},
    {name:'Benghazi',cities:['Benghazi']},
    {name:'Misrata',cities:['Misrata','Zliten']},
    {name:'Sabha',cities:['Sabha']}
  ]},
  { code:'MY', name:'Malaysia', states:[
    {name:'Selangor',cities:['Shah Alam','Petaling Jaya','Klang','Subang Jaya','Puchong','Kajang','Ampang','Rawang']},
    {name:'Kuala Lumpur',cities:['Kuala Lumpur','Chow Kit','Bukit Bintang','Mont Kiara','Bangsar','Setapak','Wangsa Maju']},
    {name:'Johor',cities:['Johor Bahru','Muar','Kluang','Batu Pahat','Skudai']},
    {name:'Penang',cities:['George Town','Butterworth','Bukit Mertajam','Bayan Lepas','Seberang Perai']},
    {name:'Perak',cities:['Ipoh','Taiping','Teluk Intan','Sitiawan']},
    {name:'Sabah',cities:['Kota Kinabalu','Sandakan','Tawau','Lahad Datu','Keningau']},
    {name:'Sarawak',cities:['Kuching','Miri','Sibu','Bintulu','Kota Samarahan']},
    {name:'Kedah',cities:['Alor Setar','Sungai Petani','Kulim','Langkawi']},
    {name:'Pahang',cities:['Kuantan','Temerloh','Bentong','Raub']},
    {name:'Negeri Sembilan',cities:['Seremban','Port Dickson','Nilai','Bahau']},
    {name:'Melaka',cities:['Melaka','Ayer Keroh','Masjid Tanah']},
    {name:'Kelantan',cities:['Kota Bharu','Pasir Mas','Tumpat']},
    {name:'Terengganu',cities:['Kuala Terengganu','Kemaman','Dungun']},
    {name:'Perlis',cities:['Kangar','Arau']}
  ]},
  { code:'MX', name:'Mexico', states:[
    {name:'Mexico City',cities:['Mexico City','Tlalpan','Iztapalapa','Coyoacán','Gustavo A. Madero','Xochimilco']},
    {name:'State of Mexico',cities:['Ecatepec','Naucalpan','Tlalnepantla','Toluca','Neza','Texcoco']},
    {name:'Jalisco',cities:['Guadalajara','Zapopan','Tlaquepaque','Tonalá','Puerto Vallarta']},
    {name:'Nuevo León',cities:['Monterrey','San Nicolás','Guadalupe','Apodaca','San Pedro Garza García']},
    {name:'Veracruz',cities:['Veracruz','Xalapa','Coatzacoalcos','Córdoba','Orizaba']},
    {name:'Puebla',cities:['Puebla','Tehuacán','San Martín','Cholula']},
    {name:'Guanajuato',cities:['León','Irapuato','Celaya','Guanajuato','Salamanca']},
    {name:'Chihuahua',cities:['Ciudad Juárez','Chihuahua','Cuauhtémoc','Delicias']},
    {name:'Tamaulipas',cities:['Reynosa','Tampico','Matamoros','Nuevo Laredo']},
    {name:'Baja California',cities:['Tijuana','Mexicali','Ensenada','Tecate']},
    {name:'Sinaloa',cities:['Culiacán','Mazatlán','Los Mochis','Guasave']},
    {name:'Coahuila',cities:['Torreón','Saltillo','Monclova','Piedras Negras']},
    {name:'Oaxaca',cities:['Oaxaca','Salina Cruz','Juchitán']},
    {name:'Guerrero',cities:['Acapulco','Chilpancingo','Iguala','Zihuatanejo']},
    {name:'Michoacán',cities:['Morelia','Uruapan','Lázaro Cárdenas','Zamora']},
    {name:'Sonora',cities:['Hermosillo','Nogales','Ciudad Obregón','Guaymas']},
    {name:'Quintana Roo',cities:['Cancún','Playa del Carmen','Chetumal','Tulum']},
    {name:'Yucatán',cities:['Mérida','Valladolid','Progreso']}
  ]},
  { code:'MA', name:'Morocco', states:[
    {name:'Casablanca-Settat',cities:['Casablanca','Mohammedia','El Jadida','Berrechid','Settat']},
    {name:'Rabat-Salé-Kénitra',cities:['Rabat','Salé','Kénitra','Témara','Skhirate']},
    {name:'Marrakech-Safi',cities:['Marrakech','Safi','Essaouira','El Kelaâ des Sraghna']},
    {name:'Fès-Meknès',cities:['Fès','Meknès','Sefrou','Moulay Yacoub']},
    {name:'Tanger-Tétouan-Al Hoceïma',cities:['Tangier','Tétouan','Al Hoceima','Larache','Chefchaouen']},
    {name:'Drâa-Tafilalet',cities:['Ouarzazate','Errachidia','Tinghir']},
    {name:'Souss-Massa',cities:['Agadir','Inezgane','Tiznit','Taroudannt']},
    {name:'Oriental',cities:['Oujda','Nador','Berkane','Taourirt']}
  ]},
  { code:'MZ', name:'Mozambique', states:[] },
  { code:'MM', name:'Myanmar', states:[
    {name:'Yangon',cities:['Yangon','Mandalay','Naypyidaw','Mawlamyine']},
    {name:'Mandalay',cities:['Mandalay','Pyin Oo Lwin','Nyaung-U']},
    {name:'Sagaing',cities:['Sagaing','Monywa','Shwebo']}
  ]},
  { code:'NP', name:'Nepal', states:[
    {name:'Bagmati',cities:['Kathmandu','Lalitpur','Bhaktapur','Kirtipur','Madhyapur Thimi']},
    {name:'Gandaki',cities:['Pokhara','Gorkha','Lamjung']},
    {name:'Lumbini',cities:['Butwal','Bhairahawa','Rupandehi']},
    {name:'Madhesh',cities:['Birgunj','Janakpur','Rajbiraj']},
    {name:'Koshi',cities:['Biratnagar','Dharan','Itahari','Inaruwa']}
  ]},
  { code:'NL', name:'Netherlands', states:[
    {name:'North Holland',cities:['Amsterdam','Haarlem','Zaandam','Amstelveen','Alkmaar','Hilversum']},
    {name:'South Holland',cities:['Rotterdam','The Hague','Leiden','Delft','Dordrecht','Zoetermeer','Gouda']},
    {name:'Utrecht',cities:['Utrecht','Amersfoort','Zeist','Nieuwegein','Houten']},
    {name:'North Brabant',cities:['Eindhoven','Breda','Tilburg','\'s-Hertogenbosch','Oss']},
    {name:'Gelderland',cities:['Arnhem','Nijmegen','Apeldoorn','Ede','Doetinchem']},
    {name:'Overijssel',cities:['Enschede','Zwolle','Almelo','Deventer','Hengelo']},
    {name:'Groningen',cities:['Groningen','Veendam','Assen']},
    {name:'Friesland',cities:['Leeuwarden','Sneek','Heerenveen']},
    {name:'Limburg',cities:['Maastricht','Heerlen','Venlo','Sittard']},
    {name:'Zeeland',cities:['Middelburg','Vlissingen','Goes']}
  ]},
  { code:'NZ', name:'New Zealand', states:[
    {name:'Auckland',cities:['Auckland','Manukau','North Shore','Waitakere','Henderson','Papakura']},
    {name:'Canterbury',cities:['Christchurch','Riccarton','Rolleston','Rangiora']},
    {name:'Wellington',cities:['Wellington','Lower Hutt','Upper Hutt','Porirua']},
    {name:'Waikato',cities:['Hamilton','Tauranga','Cambridge','Huntly']},
    {name:'Bay of Plenty',cities:['Tauranga','Rotorua','Whakatane']},
    {name:'Otago',cities:['Dunedin','Queenstown','Invercargill']},
    {name:'Northland',cities:['Whangarei','Kaitaia','Kerikeri']},
    {name:'Manawatu-Whanganui',cities:['Palmerston North','Whanganui','Levin']},
    {name:'Hawke\'s Bay',cities:['Napier','Hastings','Havelock North']},
    {name:'Nelson-Tasman',cities:['Nelson','Richmond','Motueka']}
  ]},
  { code:'NG', name:'Nigeria', states:[
    {name:'Lagos',cities:['Lagos','Ikeja','Lekki','Victoria Island','Surulere','Alimosho','Oshodi','Agege','Kosofe']},
    {name:'FCT Abuja',cities:['Abuja','Garki','Wuse','Maitama','Gwarinpa','Kubwa']},
    {name:'Kano',cities:['Kano','Nassarawa','Dakata','Sabon Gari']},
    {name:'Rivers',cities:['Port Harcourt','Obio-Akpor','Eleme','Oyigbo']},
    {name:'Oyo',cities:['Ibadan','Ogbomosho','Oyo','Iseyin']},
    {name:'Kaduna',cities:['Kaduna','Zaria','Kafanchan','Kagoro']},
    {name:'Anambra',cities:['Onitsha','Awka','Nnewi','Ekwulobia']},
    {name:'Delta',cities:['Asaba','Warri','Ughelli','Sapele']},
    {name:'Edo',cities:['Benin City','Auchi','Usen']},
    {name:'Enugu',cities:['Enugu','Nsukka','Agbani']},
    {name:'Imo',cities:['Owerri','Orlu','Okigwe']},
    {name:'Akwa Ibom',cities:['Uyo','Eket','Ikot Ekpene']},
    {name:'Cross River',cities:['Calabar','Ikom','Ogoja']},
    {name:'Ogun',cities:['Abeokuta','Sagamu','Ijebu-Ode','Ota']},
    {name:'Ondo',cities:['Akure','Ondo','Owo','Ikare']},
    {name:'Osun',cities:['Osogbo','Ile-Ife','Ilesa','Ede']},
    {name:'Katsina',cities:['Katsina','Daura','Funtua','Malumfashi']},
    {name:'Sokoto',cities:['Sokoto','Wurno','Tambuwal']},
    {name:'Borno',cities:['Maiduguri','Biu','Bama']},
    {name:'Bauchi',cities:['Bauchi','Misau','Azare']}
  ]},
  { code:'NO', name:'Norway', states:[
    {name:'Oslo',cities:['Oslo','Bærum','Lørenskog','Lillestrøm']},
    {name:'Viken',cities:['Drammen','Fredrikstad','Sarpsborg','Moss','Kongsberg']},
    {name:'Innlandet',cities:['Hamar','Gjøvik','Lillehammer']},
    {name:'Trøndelag',cities:['Trondheim','Steinkjer','Stjørdalshalsen']},
    {name:'Vestland',cities:['Bergen','Ålesund','Florø']},
    {name:'Rogaland',cities:['Stavanger','Sandnes','Haugesund']},
    {name:'Nordland',cities:['Bodø','Narvik','Mo i Rana']},
    {name:'Tromsø',cities:['Tromsø','Alta']}
  ]},
  { code:'OM', name:'Oman', states:[
    {name:'Muscat',cities:['Muscat','Seeb','Ruwi','Bawshar','Al Khuwair']},
    {name:'Dhofar',cities:['Salalah','Mirbat','Thumrait']},
    {name:'Batinah North',cities:['Sohar','Shinas','Liwa']},
    {name:'Batinah South',cities:['Rustaq','Nakhal','Barka']},
    {name:'Dakhiliyah',cities:['Nizwa','Bahla','Izki']},
    {name:'Sharqiyah North',cities:['Sur','Quriyat','Bidbid']},
    {name:'Al Buraimi',cities:['Al Buraimi','Mahadah']}
  ]},
  { code:'PK', name:'Pakistan', states:[
    {name:'Punjab',cities:['Lahore','Faisalabad','Rawalpindi','Gujranwala','Multan','Sargodha','Sialkot','Bahawalpur','Sheikhupura','Jhang','Rahim Yar Khan','Gujrat','Kasur','Wah Cantonment','Dera Ghazi Khan','Mianwali','Sahiwal','Okara','Chiniot','Vehari']},
    {name:'Sindh',cities:['Karachi','Hyderabad','Sukkur','Larkana','Nawabshah','Mirpur Khas','Khairpur','Jacobabad','Shikarpur','Dadu','Sanghar','Badin']},
    {name:'Khyber Pakhtunkhwa',cities:['Peshawar','Mardan','Abbottabad','Mingora','Kohat','Bannu','Dera Ismail Khan','Mansehra','Nowshera','Haripur','Charsadda','Swabi','Batkhela','Chakdara','Karak']},
    {name:'Balochistan',cities:['Quetta','Turbat','Khuzdar','Hub','Gwadar','Chaman','Zhob','Dera Murad Jamali','Loralai','Kharan']},
    {name:'Islamabad Capital Territory',cities:['Islamabad','F-6','F-7','F-8','G-10','G-11','E-7','Blue Area','Bahria Town','DHA','Gulberg']},
    {name:'Azad Kashmir',cities:['Mirpur','Muzaffarabad','Rawalakot','Bagh','Kotli']},
    {name:'Gilgit-Baltistan',cities:['Gilgit','Skardu','Chilas','Hunza']}
  ]},
  { code:'PS', name:'Palestine', states:[
    {name:'West Bank',cities:['Ramallah','Nablus','Hebron','Jenin','Jericho','Tulkarm','Qalqilya']},
    {name:'Gaza Strip',cities:['Gaza City','Khan Yunis','Rafah','Jabalia','Deir al-Balah']}
  ]},
  { code:'PE', name:'Peru', states:[
    {name:'Lima',cities:['Lima','Callao','San Juan de Lurigancho','San Martín de Porres','Ate','Comas','Villa El Salvador']},
    {name:'Arequipa',cities:['Arequipa','Cayma','Cerro Colorado','Yanahuara']},
    {name:'La Libertad',cities:['Trujillo','Víctor Larco Herrera','Florencia de Mora']},
    {name:'Piura',cities:['Piura','Castilla','Sullana','Talara']},
    {name:'Cusco',cities:['Cusco','San Sebastián','Wanchaq']}
  ]},
  { code:'PH', name:'Philippines', states:[
    {name:'Metro Manila',cities:['Manila','Quezon City','Makati','Pasig','Taguig','Caloocan','Mandaluyong','Paranaque','Valenzuela','Marikina','Las Pinas','Muntinlupa']},
    {name:'Calabarzon',cities:['Antipolo','Bacoor','Imus','Dasmariñas','Calamba','San Jose del Monte']},
    {name:'Central Luzon',cities:['Angeles','San Fernando','Olongapo','Malolos','Meycauayan','Cabanatuan']},
    {name:'Central Visayas',cities:['Cebu City','Mandaue','Lapu-Lapu','Talisay','Minglanilla']},
    {name:'Davao Region',cities:['Davao City','Tagum','Panabo','Digos']},
    {name:'Western Visayas',cities:['Iloilo City','Bacolod','Roxas City','San Carlos']},
    {name:'Soccsksargen',cities:['General Santos','Koronadal','Kidapawan']},
    {name:'Northern Mindanao',cities:['Cagayan de Oro','Iligan','Gingoog','Ozamiz']},
    {name:'Bicol Region',cities:['Legazpi','Naga','Sorsogon','Iriga']},
    {name:'Ilocos Region',cities:['San Fernando (La Union)','Laoag','Vigan','Dagupan']}
  ]},
  { code:'PL', name:'Poland', states:[
    {name:'Masovian',cities:['Warsaw','Radom','Płock','Siedlce','Ostrołęka']},
    {name:'Silesian',cities:['Katowice','Częstochowa','Sosnowiec','Gliwice','Zabrze','Bytom','Bielsko-Biała','Rybnik']},
    {name:'Greater Poland',cities:['Poznań','Kalisz','Konin','Gniezno','Leszno']},
    {name:'Lesser Poland',cities:['Kraków','Tarnów','Nowy Sącz','Oświęcim']},
    {name:'Lower Silesian',cities:['Wrocław','Legnica','Wałbrzych','Jelenia Góra']},
    {name:'Pomeranian',cities:['Gdańsk','Gdynia','Sopot','Słupsk']},
    {name:'Łódź',cities:['Łódź','Piotrków Trybunalski','Pabianice']},
    {name:'Kuyavian-Pomeranian',cities:['Bydgoszcz','Toruń','Włocławek','Grudziądz']},
    {name:'Lublin',cities:['Lublin','Zamość','Chełm','Biała Podlaska']},
    {name:'Subcarpathian',cities:['Rzeszów','Przemyśl','Stalowa Wola','Mielec']},
    {name:'Warmian-Masurian',cities:['Olsztyn','Elbląg','Ełk']},
    {name:'West Pomeranian',cities:['Szczecin','Koszalin','Świnoujście']},
    {name:'Opole',cities:['Opole','Kędzierzyn-Koźle']},
    {name:'Holy Cross',cities:['Kielce','Ostrowiec Świętokrzyski','Starachowice']},
    {name:'Podlaskie',cities:['Białystok','Suwałki','Łomża']},
    {name:'Lubusz',cities:['Zielona Góra','Gorzów Wielkopolski']}
  ]},
  { code:'PT', name:'Portugal', states:[
    {name:'Lisbon',cities:['Lisbon','Amadora','Sintra','Almada','Seixal','Barreiro','Cascais','Oeiras','Setúbal']},
    {name:'Porto',cities:['Porto','Vila Nova de Gaia','Matosinhos','Maia','Gondomar','Braga','Guimarães']},
    {name:'Center',cities:['Coimbra','Leiria','Viseu','Aveiro','Figueira da Foz']},
    {name:'Algarve',cities:['Faro','Portimão','Albufeira','Loulé','Lagos','Silves','Tavira']},
    {name:'Alentejo',cities:['Évora','Beja','Portalegre','Elvas']},
    {name:'Madeira',cities:['Funchal','Câmara de Lobos','Santa Cruz','Ribeira Brava']},
    {name:'Azores',cities:['Ponta Delgada','Angra do Heroísmo','Horta']}
  ]},
  { code:'QA', name:'Qatar', states:[
    {name:'Doha',cities:['Doha','West Bay','The Pearl','Lusail','Al Wakrah','Al Khor']},
    {name:'Al Rayyan',cities:['Al Rayyan','Education City','Sports City']},
    {name:'Al Wakrah',cities:['Al Wakrah','Al Wukair']},
    {name:'Al Khor',cities:['Al Khor','Al Thakhira']},
    {name:'Umm Slal',cities:['Umm Slal Mohammed','Umm Slal Ali']}
  ]},
  { code:'RO', name:'Romania', states:[
    {name:'Bucharest',cities:['Bucharest','Sector 1','Sector 2','Sector 3','Sector 4','Sector 5','Sector 6']},
    {name:'Cluj',cities:['Cluj-Napoca','Dej','Turda','Câmpia Turzii']},
    {name:'Iași',cities:['Iași','Pașcani','Hârlău']},
    {name:'Constanța',cities:['Constanța','Mangalia','Năvodari','Medgidia']},
    {name:'Prahova',cities:['Ploiești','Câmpina','Sinaia']},
    {name:'Timiș',cities:['Timișoara','Lugoj','Sânnicolau Mare']},
    {name:'Brașov',cities:['Brașov','Codlea','Râșnov','Zărnești']},
    {name:'Dolj',cities:['Craiova','Băilești','Calafat']},
    {name:'Galați',cities:['Galați','Tecuci','Târgu Bujor']},
    {name:'Bacău',cities:['Bacău','Onești','Comănești']}
  ]},
  { code:'RU', name:'Russia', states:[
    {name:'Moscow',cities:['Moscow','Zelenograd','Troitsk','Shcherbinka','Crocus City']},
    {name:'Saint Petersburg',cities:['Saint Petersburg','Pushkin','Peterhof','Kronstadt','Sestroretsk']},
    {name:'Krasnodar Krai',cities:['Krasnodar','Sochi','Novorossiysk','Armavir']},
    {name:'Sverdlovsk Oblast',cities:['Yekaterinburg','Nizhny Tagil','Kamensk-Uralsky','Pervouralsk']},
    {name:'Tatarstan',cities:['Kazan','Naberezhnye Chelny','Almetyevsk','Zelenodolsk']},
    {name:'Novosibirsk Oblast',cities:['Novosibirsk','Berdsk','Ob']},
    {name:'Chelyabinsk Oblast',cities:['Chelyabinsk','Magnitogorsk','Zlatoust','Miass']},
    {name:'Samara Oblast',cities:['Samara','Togliatti','Syzran','Novokuybyshevsk']},
    {name:'Nizhny Novgorod Oblast',cities:['Nizhny Novgorod','Dzerzhinsk','Arzamas','Sarov']},
    {name:'Rostov Oblast',cities:['Rostov-on-Don','Taganrog','Shakhty','Novocherkassk']},
    {name:'Bashkortostan',cities:['Ufa','Sterlitamak','Salavat','Neftekamsk']},
    {name:'Krasnoyarsk Krai',cities:['Krasnoyarsk','Norilsk','Achinsk','Zheleznogorsk']},
    {name:'Perm Krai',cities:['Perm','Berezniki','Solikamsk','Lysva']},
    {name:'Voronezh Oblast',cities:['Voronezh','Novovoronezh','Rossosh','Liski']},
    {name:'Omsk Oblast',cities:['Omsk']},
    {name:'Tyumen Oblast',cities:['Tyumen','Tobolsk']}
  ]},
  { code:'SA', name:'Saudi Arabia', states:[
    {name:'Riyadh',cities:['Riyadh','Al Diriyah','Al Kharj','Al Majmaah','Shaqraa','Dawadmi','Al Quwayiyah','Afif','Wadi Al-Dawasir']},
    {name:'Makkah',cities:['Mecca','Jeddah','Taif','Al Qunfudhah','Rabigh','Al Jumum','Bahra','Al Lith']},
    {name:'Madinah',cities:['Medina','Yanbu','Alula','Badr','Khaybar','Mahd adh Dhahab']},
    {name:'Eastern Province',cities:['Dammam','Khobar','Dhahran','Qatif','Jubail','Hofuf','Mubarraz','Harad']},
    {name:'Asir',cities:['Abha','Khamis Mushait','Bisha','Sarat Abidah','Tathlith']},
    {name:'Jizan',cities:['Jizan','Sabya','Abu Arish','Samtah']},
    {name:'Najran',cities:['Najran','Sharurah','Habunah']},
    {name:'Al Baha',cities:['Al Baha','Al Aqiq','Qilwah']},
    {name:'Tabuk',cities:['Tabuk','Duba','Haql','Umluj','Al Wajh']},
    {name:'Hail',cities:['Hail','Baqaa','Mawqaq']},
    {name:'Jawf',cities:['Sakaka','Dawmat al-Jandal','Qurayat']},
    {name:'Northern Borders',cities:['Arar','Rafha','Turaif']}
  ]},
  { code:'SN', name:'Senegal', states:[] },
  { code:'SG', name:'Singapore', states:[
    {name:'Central Region',cities:['Orchard','Bugis','Marina Bay','Clarke Quay','Chinatown','Little India','Toa Payoh','Bishan','Ang Mo Kio','Serangoon']},
    {name:'West Region',cities:['Jurong East','Bukit Batok','Clementi','Buona Vista','Queenstown','Boon Lay','Tuas']},
    {name:'North Region',cities:['Woodlands','Yishun','Sembawang','Admiralty']},
    {name:'North-East Region',cities:['Hougang','Sengkang','Punggol','Serangoon','Buangkok']},
    {name:'East Region',cities:['Tampines','Pasir Ris','Bedok','Changi','Paya Lebar','Geylang','Katong']}
  ]},
  { code:'ZA', name:'South Africa', states:[
    {name:'Gauteng',cities:['Johannesburg','Pretoria','Soweto','Ekurhuleni','Randburg','Sandton','Midrand','Centurion','Roodepoort']},
    {name:'Western Cape',cities:['Cape Town','Stellenbosch','Paarl','George','Knysna','Mossel Bay','Bellville','Mitchells Plain']},
    {name:'KwaZulu-Natal',cities:['Durban','Pietermaritzburg','Newcastle','Richards Bay','Pinetown','Umhlanga']},
    {name:'Eastern Cape',cities:['Port Elizabeth','East London','Mthatha','Bhisho','Queenstown']},
    {name:'Free State',cities:['Bloemfontein','Welkom','Botshabelo','Phuthaditjhaba']},
    {name:'Limpopo',cities:['Polokwane','Tzaneen','Thohoyandou','Louis Trichardt']},
    {name:'Mpumalanga',cities:['Nelspruit','Witbank','Middelburg','Secunda']},
    {name:'North West',cities:['Rustenburg','Klerksdorp','Potchefstroom','Mahikeng']},
    {name:'Northern Cape',cities:['Kimberley','Upington','Springbok','De Aar']}
  ]},
  { code:'KR', name:'South Korea', states:[
    {name:'Seoul',cities:['Seoul','Gangnam','Sinchon','Hongdae','Itaewon','Jongno','Mapo','Gwanak','Dobong']},
    {name:'Gyeonggi-do',cities:['Suwon','Seongnam','Goyang','Yongin','Bucheon','Ansan','Anyang','Hwaseong','Uijeongbu']},
    {name:'Busan',cities:['Busan','Haeundae','Seo-gu','Nam-gu','Dongnae','Saha']},
    {name:'Incheon',cities:['Incheon','Bupyeong','Namdong','Seo-gu']},
    {name:'Daegu',cities:['Daegu','Dong-gu','Suseong','Buk-gu']},
    {name:'Daejeon',cities:['Daejeon','Yuseong','Dunsan','Seo-gu']},
    {name:'Gwangju',cities:['Gwangju','Nam-gu','Seo-gu','Bukgu']},
    {name:'Ulsan',cities:['Ulsan','Nam-gu','Buk-gu','Dong-gu']},
    {name:'Gyeongnam',cities:['Changwon','Gimhae','Jinju','Yangsan','Tongyeong']},
    {name:'Chungcheongbuk-do',cities:['Cheongju','Chungju','Jecheon']},
    {name:'Jeollabuk-do',cities:['Jeonju','Iksan','Gunsan','Namwon']},
    {name:'Jeollanam-do',cities:['Gwangyang','Suncheon','Mokpo','Yeosu']},
    {name:'Gyeongbuk',cities:['Pohang','Andong','Gumi','Gyeongju','Gimcheon']}
  ]},
  { code:'ES', name:'Spain', states:[
    {name:'Community of Madrid',cities:['Madrid','Móstoles','Alcalá de Henares','Fuenlabrada','Leganés','Getafe','Alcorcón','Torrejón de Ardoz']},
    {name:'Catalonia',cities:['Barcelona','L\'Hospitalet','Badalona','Terrassa','Sabadell','Tarragona','Lleida','Mataró','Santa Coloma']},
    {name:'Andalusia',cities:['Seville','Málaga','Córdoba','Granada','Almería','Jaén','Cádiz','Huelva']},
    {name:'Valencia',cities:['Valencia','Alicante','Elche','Castellón','Torrent','Gandia','Benidorm']},
    {name:'Basque Country',cities:['Bilbao','Vitoria-Gasteiz','San Sebastián','Barakaldo','Getxo']},
    {name:'Castile and León',cities:['Valladolid','Burgos','Salamanca','León','Palencia','Zamora','Segovia']},
    {name:'Galicia',cities:['Vigo','A Coruña','Ourense','Santiago de Compostela','Pontevedra','Lugo']},
    {name:'Canary Islands',cities:['Las Palmas','Santa Cruz de Tenerife','Telde','La Laguna','Arrecife','Puerto del Rosario']},
    {name:'Murcia',cities:['Murcia','Cartagena','Lorca','Molina de Segura']},
    {name:'Aragon',cities:['Zaragoza','Huesca','Teruel']},
    {name:'Extremadura',cities:['Badajoz','Cáceres','Mérida','Plasencia']},
    {name:'Castile-La Mancha',cities:['Toledo','Guadalajara','Albacete','Ciudad Real','Cuenca']},
    {name:'Asturias',cities:['Oviedo','Gijón','Avilés','Mieres']},
    {name:'Navarre',cities:['Pamplona','Tudela','Barañáin']},
    {name:'Cantabria',cities:['Santander','Torrelavega','Castro-Urdiales']},
    {name:'Balearic Islands',cities:['Palma','Ibiza','Mahón','Manacor']}
  ]},
  { code:'LK', name:'Sri Lanka', states:[
    {name:'Western',cities:['Colombo','Dehiwala','Sri Jayawardenepura','Moratuwa','Negombo','Kelaniya']},
    {name:'Central',cities:['Kandy','Matale','Nuwara Eliya']},
    {name:'Southern',cities:['Galle','Matara','Hambantota','Weligama']},
    {name:'Northern',cities:['Jaffna','Kilinochchi','Mannar','Vavuniya']},
    {name:'Eastern',cities:['Trincomalee','Batticaloa','Kalmunai','Ampara']},
    {name:'North Western',cities:['Kurunegala','Puttalam','Chilaw']},
    {name:'Sabaragamuwa',cities:['Ratnapura','Kegalle']},
    {name:'North Central',cities:['Anuradhapura','Polonnaruwa']},
    {name:'Uva',cities:['Badulla','Monaragala']}
  ]},
  { code:'SD', name:'Sudan', states:[
    {name:'Khartoum',cities:['Khartoum','Omdurman','Khartoum North','Bahri']},
    {name:'Red Sea',cities:['Port Sudan','Suakin']},
    {name:'Gezira',cities:['Wad Madani','Managil']},
    {name:'Kassala',cities:['Kassala','New Halfa']}
  ]},
  { code:'SE', name:'Sweden', states:[
    {name:'Stockholm',cities:['Stockholm','Solna','Sundbyberg','Huddinge','Botkyrka','Nacka','Tyresö','Haninge']},
    {name:'Västra Götaland',cities:['Gothenburg','Mölndal','Borås','Trollhättan','Uddevalla','Skövde']},
    {name:'Skåne',cities:['Malmö','Helsingborg','Lund','Kristianstad','Ängelholm','Landskrona']},
    {name:'Östergötland',cities:['Linköping','Norrköping','Motala','Mjölby']},
    {name:'Uppsala',cities:['Uppsala','Enköping','Tierp']},
    {name:'Dalarna',cities:['Falun','Borlänge','Mora','Avesta']},
    {name:'Norrbotten',cities:['Luleå','Kiruna','Piteå','Boden']},
    {name:'Västernorrland',cities:['Sundsvall','Härnösand','Kramfors','Örnsköldsvik']}
  ]},
  { code:'CH', name:'Switzerland', states:[
    {name:'Zurich',cities:['Zurich','Winterthur','Uster','Kloten','Dübendorf']},
    {name:'Bern',cities:['Bern','Biel/Bienne','Thun','Köniz','Burgdorf']},
    {name:'Vaud',cities:['Lausanne','Montreux','Yverdon-les-Bains','Nyon','Morges']},
    {name:'Geneva',cities:['Geneva','Carouge','Meyrin','Vernier','Lancy']},
    {name:'Aargau',cities:['Aarau','Baden','Wettingen','Rheinfelden']},
    {name:'Basel-Stadt',cities:['Basel']},
    {name:'St. Gallen',cities:['St. Gallen','Rapperswil-Jona','Wil','Arbon']},
    {name:'Ticino',cities:['Lugano','Bellinzona','Locarno','Mendrisio']},
    {name:'Lucerne',cities:['Lucerne','Kriens','Emmen','Sursee']},
    {name:'Valais',cities:['Sion','Sierre','Brig-Glis','Monthey','Martigny']}
  ]},
  { code:'SY', name:'Syria', states:[
    {name:'Damascus',cities:['Damascus','Jaramana','Douma','Qudsayya']},
    {name:'Aleppo',cities:['Aleppo','Al-Bab','Afrin','Azaz']},
    {name:'Latakia',cities:['Latakia','Jableh','Al Haffa']},
    {name:'Homs',cities:['Homs','Al-Qusayr','Talkalakh']},
    {name:'Hama',cities:['Hama','Masyaf','Salamiyah']},
    {name:'Tartus',cities:['Tartus','Baniyas','Drekish']}
  ]},
  { code:'TW', name:'Taiwan', states:[
    {name:'Taipei',cities:['Taipei','Xinyi','Daan','Zhongzheng','Zhongshan','Songshan']},
    {name:'New Taipei',cities:['New Taipei','Banqiao','Xizhi','Sanchong','Zhonghe','Yonghe','Tucheng','Linkou']},
    {name:'Taichung',cities:['Taichung','Xitun','Beitun','Xinshe','Tanzi']},
    {name:'Tainan',cities:['Tainan','Yongkang','Rende','Sinhua','Guiren']},
    {name:'Kaohsiung',cities:['Kaohsiung','Zuoying','Sanmin','Lingya','Qianjin']},
    {name:'Taoyuan',cities:['Taoyuan','Zhongli','Bade','Yangmei','Guishan']},
    {name:'Hsinchu',cities:['Hsinchu City','Zhubei','Zhudong','Xinpu']}
  ]},
  { code:'TZ', name:'Tanzania', states:[
    {name:'Dar es Salaam',cities:['Dar es Salaam','Kinondoni','Ilala','Temeke']},
    {name:'Mwanza',cities:['Mwanza','Ilemela']},
    {name:'Arusha',cities:['Arusha','Moshi']},
    {name:'Dodoma',cities:['Dodoma']},
    {name:'Mbeya',cities:['Mbeya','Tukuyu']},
    {name:'Zanzibar',cities:['Zanzibar City','Chake-Chake','Wete','Mkoani']}
  ]},
  { code:'TH', name:'Thailand', states:[
    {name:'Bangkok',cities:['Bangkok','Nonthaburi','Pak Kret','Samut Prakan','Bang Bua Thong']},
    {name:'Chiang Mai',cities:['Chiang Mai','Lamphun','Mae Rim','San Kamphaeng']},
    {name:'Nakhon Ratchasima',cities:['Nakhon Ratchasima','Pak Chong','Phimai','Bua Yai']},
    {name:'Chonburi',cities:['Pattaya','Chonburi','Laem Chabang','Si Racha']},
    {name:'Khon Kaen',cities:['Khon Kaen','Chum Phae','Phon']},
    {name:'Phuket',cities:['Phuket Town','Patong','Kata','Karon','Kamala']},
    {name:'Udon Thani',cities:['Udon Thani','Nam Som','Nong Bua Lamphu']},
    {name:'Nakhon Si Thammarat',cities:['Nakhon Si Thammarat','Thung Song','Pak Phanang']},
    {name:'Surat Thani',cities:['Surat Thani','Koh Samui','Ban Na San']},
    {name:'Hat Yai',cities:['Hat Yai','Songkhla','Pattani']}
  ]},
  { code:'TN', name:'Tunisia', states:[
    {name:'Tunis',cities:['Tunis','Ariana','Ben Arous','La Marsa','Carthage','Sidi Bou Said']},
    {name:'Sfax',cities:['Sfax','Sakiet El Zit','Thyna']},
    {name:'Sousse',cities:['Sousse','Hammam Sousse','Msaken']},
    {name:'Nabeul',cities:['Nabeul','Hammamet','Kelibia']},
    {name:'Monastir',cities:['Monastir','Skanes','Moknine']},
    {name:'Bizerte',cities:['Bizerte','Menzel Bourguiba']},
    {name:'Kairouan',cities:['Kairouan','Sbikha']},
    {name:'Gabès',cities:['Gabès','Metouia']},
    {name:'Gafsa',cities:['Gafsa','Métlaoui']},
    {name:'Djerba',cities:['Houmt Souk','Midoun','Erriadh']}
  ]},
  { code:'TR', name:'Turkey', states:[
    {name:'Istanbul',cities:['Istanbul','Kadıköy','Beşiktaş','Beyoğlu','Üsküdar','Bağcılar','Bahçelievler','Gaziosmanpaşa','Esenyurt','Ümraniye','Avcılar','Maltepe']},
    {name:'Ankara',cities:['Ankara','Etimesgut','Çankaya','Mamak','Sincan','Keçiören','Yenimahalle']},
    {name:'İzmir',cities:['İzmir','Bornova','Buca','Konak','Balçova','Karşıyaka','Çiğli']},
    {name:'Bursa',cities:['Bursa','Osmangazi','Nilüfer','Yıldırım','İnegöl','Mustafakemalpaşa']},
    {name:'Adana',cities:['Adana','Mersin','İskenderun','Tarsus','Ceyhan']},
    {name:'Antalya',cities:['Antalya','Alanya','Manavgat','Kemer','Side','Belek']},
    {name:'Konya',cities:['Konya','Ereğli','Karapınar','Akşehir']},
    {name:'Gaziantep',cities:['Gaziantep','Şahinbey','Nizip','İslahiye']},
    {name:'Kayseri',cities:['Kayseri','Melikgazi','Talas','Hacılar']},
    {name:'Kocaeli',cities:['Kocaeli','Gebze','İzmit','Körfez','Derince']},
    {name:'Mersin',cities:['Mersin','Tarsus','Erdemli','Silifke']},
    {name:'Diyarbakır',cities:['Diyarbakır','Kayapınar','Bağlar','Sur']},
    {name:'Hatay',cities:['Antakya','İskenderun','Reyhanlı','Dörtyol']},
    {name:'Samsun',cities:['Samsun','İlkadım','Canik','Tekkeköy']},
    {name:'Trabzon',cities:['Trabzon','Akçaabat','Ortahisar','Of']}
  ]},
  { code:'UG', name:'Uganda', states:[
    {name:'Central',cities:['Kampala','Entebbe','Mukono','Jinja']},
    {name:'Eastern',cities:['Jinja','Mbale','Soroti','Tororo']},
    {name:'Northern',cities:['Gulu','Lira','Arua']},
    {name:'Western',cities:['Mbarara','Kasese','Fort Portal']}
  ]},
  { code:'UA', name:'Ukraine', states:[
    {name:'Kyiv',cities:['Kyiv','Brovary','Boryspil','Vyshhorod']},
    {name:'Kharkiv',cities:['Kharkiv','Chuhuiv','Merefa','Lozova']},
    {name:'Odessa',cities:['Odessa','Bilhorod-Dnistrovskyi','Illichivsk','Yuzhne']},
    {name:'Dnipro',cities:['Dnipro','Kamianske','Pavlograd','Kryvyi Rih']},
    {name:'Donetsk',cities:['Mariupol','Kramatorsk','Sloviansk','Bakhmut']},
    {name:'Zaporizhzhia',cities:['Zaporizhzhia','Melitopol','Berdyansk','Enerhodar']},
    {name:'Lviv',cities:['Lviv','Drohobych','Stryi','Boryslav']},
    {name:'Vinnytsia',cities:['Vinnytsia','Zhmerynka','Mohyliv-Podilskyi']},
    {name:'Poltava',cities:['Poltava','Kremenchuk','Myrhorod']},
    {name:'Cherkasy',cities:['Cherkasy','Smila','Uman']}
  ]},
  { code:'AE', name:'United Arab Emirates', states:[
    {name:'Dubai',cities:['Dubai','Deira','Bur Dubai','Jumeirah','Downtown Dubai','Business Bay','DIFC','Marina','JBR','Palm Jumeirah','Al Quoz','Al Barsha','Mirdif','Karama','Discovery Gardens','International City']},
    {name:'Abu Dhabi',cities:['Abu Dhabi','Al Ain','Al Mussafah','Khalifa City','Khalidiyah','Corniche','Al Reef','Yas Island','Saadiyat Island','Mohamed Bin Zayed City']},
    {name:'Sharjah',cities:['Sharjah','Al Qasimia','Al Nahda','Al Majaz','Industrial Area','Al Khan','Muweilah','Rolla']},
    {name:'Ajman',cities:['Ajman','Al Rumaila','Al Jurf','Al Rashidiya']},
    {name:'Ras Al Khaimah',cities:['Ras Al Khaimah','Al Jazeera Al Hamra','Khuzam','Nakheel']},
    {name:'Fujairah',cities:['Fujairah','Dibba Al Fujairah','Kalba','Khor Fakkan']},
    {name:'Umm Al Quwain',cities:['Umm Al Quwain','Al Riqqah','Saleh']}
  ]},
  { code:'GB', name:'United Kingdom', states:[
    {name:'England - London',cities:['London','Canary Wharf','City of London','West End','Shoreditch','Chelsea','Kensington','Notting Hill','Islington','Hackney','Southwark','Lambeth','Hammersmith','Wandsworth','Croydon','Bromley','Ealing','Brent','Harrow','Barnet','Enfield','Waltham Forest']},
    {name:'England - South East',cities:['Birmingham','Manchester','Leeds','Sheffield','Bristol','Liverpool','Newcastle','Bradford','Coventry','Leicester','Nottingham','Reading','Oxford','Cambridge','Southampton','Portsmouth','Brighton','Bournemouth']},
    {name:'England - North',cities:['Manchester','Liverpool','Leeds','Sheffield','Newcastle','Hull','Sunderland','Middlesbrough','Bolton','Blackpool','Preston','Blackburn','Carlisle']},
    {name:'England - Midlands',cities:['Birmingham','Coventry','Leicester','Nottingham','Derby','Wolverhampton','Stoke-on-Trent','Lincoln','Shrewsbury','Worcester','Hereford']},
    {name:'England - South West',cities:['Bristol','Plymouth','Exeter','Bath','Swindon','Gloucester','Cheltenham','Bournemouth','Poole','Truro','Taunton']},
    {name:'Scotland',cities:['Edinburgh','Glasgow','Aberdeen','Dundee','Inverness','Stirling','Perth','St Andrews']},
    {name:'Wales',cities:['Cardiff','Swansea','Newport','Wrexham','Barry','Neath','Bridgend']},
    {name:'Northern Ireland',cities:['Belfast','Derry','Lisburn','Newtownabbey','Bangor','Castlereagh','Ballymena']}
  ]},
  { code:'US', name:'United States', states:[
    {name:'Alabama',cities:['Birmingham','Montgomery','Huntsville','Mobile','Tuscaloosa','Hoover','Auburn','Dothan']},
    {name:'Alaska',cities:['Anchorage','Fairbanks','Juneau','Sitka','Ketchikan']},
    {name:'Arizona',cities:['Phoenix','Tucson','Mesa','Chandler','Scottsdale','Glendale','Tempe','Gilbert','Peoria']},
    {name:'Arkansas',cities:['Little Rock','Fort Smith','Fayetteville','Springdale','Jonesboro','Conway']},
    {name:'California',cities:['Los Angeles','San Diego','San Jose','San Francisco','Fresno','Sacramento','Long Beach','Oakland','Bakersfield','Anaheim','Santa Ana','Riverside','Stockton','Irvine','Chula Vista','Fremont','San Bernardino','Modesto','Fontana','Moreno Valley','Santa Clarita','Glendale','Huntington Beach','Santa Rosa','Garden Grove','Oceanside','Rancho Cucamonga','Ontario','Lancaster','Elk Grove']},
    {name:'Colorado',cities:['Denver','Colorado Springs','Aurora','Fort Collins','Lakewood','Thornton','Arvada','Westminster','Pueblo','Boulder']},
    {name:'Connecticut',cities:['Bridgeport','New Haven','Stamford','Hartford','Waterbury','Norwalk','Danbury','New Britain']},
    {name:'Delaware',cities:['Wilmington','Dover','Newark','Middletown','Smyrna','Milford']},
    {name:'Florida',cities:['Jacksonville','Miami','Tampa','Orlando','St. Petersburg','Hialeah','Port St. Lucie','Cape Coral','Fort Lauderdale','Tallahassee','Pembroke Pines','Hollywood','Miramar','Gainesville','Coral Springs','Palm Bay','West Palm Beach','Clearwater','Lakeland','Pompano Beach']},
    {name:'Georgia',cities:['Atlanta','Columbus','Augusta','Savannah','Athens','Sandy Springs','Roswell','Macon','Johns Creek','Albany','Warner Robins','Alpharetta','Marietta','Smyrna','Valdosta']},
    {name:'Hawaii',cities:['Honolulu','Pearl City','Hilo','Kailua','Waipahu','Kaneohe','Kahului','Mililani']},
    {name:'Idaho',cities:['Boise','Nampa','Meridian','Idaho Falls','Pocatello','Caldwell','Twin Falls','Coeur d\'Alene']},
    {name:'Illinois',cities:['Chicago','Aurora','Rockford','Joliet','Naperville','Springfield','Peoria','Elgin','Waukegan','Cicero','Champaign','Bloomington']},
    {name:'Indiana',cities:['Indianapolis','Fort Wayne','Evansville','South Bend','Carmel','Fishers','Bloomington','Hammond','Gary','Lafayette','Muncie','Terre Haute']},
    {name:'Iowa',cities:['Des Moines','Cedar Rapids','Davenport','Sioux City','Iowa City','Waterloo','Council Bluffs','Dubuque']},
    {name:'Kansas',cities:['Wichita','Overland Park','Kansas City','Topeka','Olathe','Lawrence','Shawnee','Manhattan']},
    {name:'Kentucky',cities:['Louisville','Lexington','Bowling Green','Owensboro','Covington','Hopkinsville','Richmond']},
    {name:'Louisiana',cities:['New Orleans','Baton Rouge','Shreveport','Metairie','Lafayette','Lake Charles','Kenner','Bossier City','Monroe']},
    {name:'Maine',cities:['Portland','Lewiston','Bangor','South Portland','Auburn','Biddeford','Sanford']},
    {name:'Maryland',cities:['Baltimore','Frederick','Rockville','Gaithersburg','Bowie','Hagerstown','Annapolis','College Park','Salisbury']},
    {name:'Massachusetts',cities:['Boston','Worcester','Springfield','Lowell','Cambridge','New Bedford','Brockton','Quincy','Lynn','Fall River','Newton','Somerville','Lawrence','Framingham','Haverhill']},
    {name:'Michigan',cities:['Detroit','Grand Rapids','Warren','Sterling Heights','Ann Arbor','Lansing','Flint','Dearborn','Livonia','Westland','Troy','Farmington Hills','Kalamazoo','Pontiac','Saginaw']},
    {name:'Minnesota',cities:['Minneapolis','Saint Paul','Rochester','Duluth','Bloomington','Brooklyn Park','Plymouth','Saint Cloud','Woodbury','Eagan','Coon Rapids','Burnsville']},
    {name:'Mississippi',cities:['Jackson','Gulfport','Southaven','Hattiesburg','Biloxi','Tupelo','Olive Branch','Meridian']},
    {name:'Missouri',cities:['Kansas City','Saint Louis','Springfield','Independence','Columbia','Lee\'s Summit','O\'Fallon','St. Joseph','St. Charles','Blue Springs']},
    {name:'Montana',cities:['Billings','Missoula','Great Falls','Bozeman','Butte','Helena','Kalispell']},
    {name:'Nebraska',cities:['Omaha','Lincoln','Bellevue','Grand Island','Kearney','Fremont','Norfolk']},
    {name:'Nevada',cities:['Las Vegas','Henderson','Reno','North Las Vegas','Sparks','Carson City','Fernley']},
    {name:'New Hampshire',cities:['Manchester','Nashua','Concord','Derry','Dover','Rochester','Salem','Merrimack']},
    {name:'New Jersey',cities:['Newark','Jersey City','Paterson','Elizabeth','Edison','Woodbridge','Lakewood','Toms River','Hamilton','Trenton','Clifton','Camden','Brick','Cherry Hill','Passaic']},
    {name:'New Mexico',cities:['Albuquerque','Las Cruces','Rio Rancho','Santa Fe','Roswell','Farmington','Clovis']},
    {name:'New York',cities:['New York City','Brooklyn','Queens','Manhattan','Bronx','Staten Island','Buffalo','Rochester','Yonkers','Syracuse','Albany','New Rochelle','Mount Vernon','Schenectady','Utica','Binghamton','White Plains','Niagara Falls']},
    {name:'North Carolina',cities:['Charlotte','Raleigh','Greensboro','Durham','Winston-Salem','Fayetteville','Cary','Wilmington','High Point','Concord','Gastonia','Chapel Hill','Asheville','Greenville']},
    {name:'North Dakota',cities:['Fargo','Bismarck','Grand Forks','Minot','West Fargo','Williston']},
    {name:'Ohio',cities:['Columbus','Cleveland','Cincinnati','Toledo','Akron','Dayton','Parma','Canton','Youngstown','Lorain','Hamilton','Elyria','Springfield','Kettering']},
    {name:'Oklahoma',cities:['Oklahoma City','Tulsa','Norman','Broken Arrow','Edmond','Lawton','Moore','Midwest City','Stillwater','Enid']},
    {name:'Oregon',cities:['Portland','Eugene','Salem','Gresham','Hillsboro','Beaverton','Bend','Medford','Springfield','Corvallis','Albany']},
    {name:'Pennsylvania',cities:['Philadelphia','Pittsburgh','Allentown','Erie','Reading','Scranton','Bethlehem','Lancaster','Harrisburg','Altoona','York','Wilkes-Barre','Chester','Norristown']},
    {name:'Rhode Island',cities:['Providence','Cranston','Woonsocket','Pawtucket','East Providence','Warwick','North Providence']},
    {name:'South Carolina',cities:['Charleston','Columbia','North Charleston','Mount Pleasant','Rock Hill','Greenville','Summerville','Spartanburg','Hilton Head']},
    {name:'South Dakota',cities:['Sioux Falls','Rapid City','Aberdeen','Brookings','Watertown']},
    {name:'Tennessee',cities:['Memphis','Nashville','Knoxville','Chattanooga','Clarksville','Murfreesboro','Franklin','Jackson','Johnson City','Bartlett','Hendersonville','Kingsport']},
    {name:'Texas',cities:['Houston','San Antonio','Dallas','Austin','Fort Worth','El Paso','Arlington','Corpus Christi','Plano','Lubbock','Irving','Laredo','Garland','Frisco','McKinney','Amarillo','Grand Prairie','Brownsville','Pasadena','Killeen','Beaumont','McAllen','Mesquite','Midland','Denton','Waco','Carrollton','Round Rock','Abilene','Richardson','Odessa','Tyler','San Angelo','Pearland']},
    {name:'Utah',cities:['Salt Lake City','West Valley City','Provo','West Jordan','Orem','Sandy','Ogden','St. George','Layton','Taylorsville','South Jordan','Draper','Lehi']},
    {name:'Vermont',cities:['Burlington','Essex','South Burlington','Colchester','Rutland','Bennington']},
    {name:'Virginia',cities:['Virginia Beach','Norfolk','Chesapeake','Richmond','Newport News','Alexandria','Hampton','Roanoke','Portsmouth','Suffolk','Lynchburg','Harrisonburg']},
    {name:'Washington',cities:['Seattle','Spokane','Tacoma','Vancouver','Bellevue','Kirkland','Kennewick','Renton','Spokane Valley','Everett','Redmond','Yakima','Bellingham','Federal Way','Marysville']},
    {name:'West Virginia',cities:['Charleston','Huntington','Morgantown','Parkersburg','Wheeling','Fairmont']},
    {name:'Wisconsin',cities:['Milwaukee','Madison','Green Bay','Kenosha','Racine','Appleton','Waukesha','Oshkosh','Eau Claire','Janesville','West Allis','La Crosse','Sheboygan']},
    {name:'Wyoming',cities:['Cheyenne','Casper','Laramie','Gillette','Rock Springs','Sheridan']}
  ]},
  { code:'UY', name:'Uruguay', states:[
    {name:'Montevideo',cities:['Montevideo','Ciudad Vieja','Pocitos','Buceo','Malvín']},
    {name:'Canelones',cities:['Canelones','Las Piedras','La Paz','Pando']},
    {name:'Maldonado',cities:['Maldonado','Punta del Este','San Carlos']}
  ]},
  { code:'UZ', name:'Uzbekistan', states:[
    {name:'Tashkent',cities:['Tashkent','Chirchiq','Angren','Almaliq']},
    {name:'Samarkand',cities:['Samarkand','Kattaqo\'rg\'on']},
    {name:'Fergana',cities:['Fergana','Namangan','Andijan','Qo\'qon']},
    {name:'Bukhara',cities:['Bukhara','Kagan']},
    {name:'Kashkadarya',cities:['Qarshi','Shahrisabz']},
    {name:'Surxondaryo',cities:['Termez','Denov']}
  ]},
  { code:'VE', name:'Venezuela', states:[
    {name:'Capital District',cities:['Caracas']},
    {name:'Miranda',cities:['Los Teques','Guarenas','Guatire','Charallave']},
    {name:'Zulia',cities:['Maracaibo','Cabimas','Ciudad Ojeda','Machiques']},
    {name:'Carabobo',cities:['Valencia','Puerto Cabello','Guacara','San Diego']},
    {name:'Aragua',cities:['Maracay','La Victoria','Villa de Cura','Cagua']},
    {name:'Bolívar',cities:['Ciudad Bolívar','Puerto Ordaz','Upata']},
    {name:'Anzoátegui',cities:['Barcelona','Puerto La Cruz','Anaco','Lechería']},
    {name:'Lara',cities:['Barquisimeto','Carora','El Tocuyo']}
  ]},
  { code:'VN', name:'Vietnam', states:[
    {name:'Ho Chi Minh City',cities:['Ho Chi Minh City','District 1','District 3','District 7','Binh Thanh','Thu Duc','Tan Binh','Go Vap']},
    {name:'Hanoi',cities:['Hanoi','Hoan Kiem','Dong Da','Ba Dinh','Hai Ba Trung','Hoang Mai','Long Bien','Cau Giay']},
    {name:'Da Nang',cities:['Da Nang','Hai Chau','Lien Chieu','Son Tra','Ngu Hanh Son']},
    {name:'Hai Phong',cities:['Hai Phong','Hong Bang','Ngo Quyen','Le Chan']},
    {name:'Can Tho',cities:['Can Tho','Ninh Kieu','Binh Thuy','Cai Rang']},
    {name:'Binh Duong',cities:['Thu Dau Mot','Di An','Thuan An','Bien Hoa']},
    {name:'Dong Nai',cities:['Bien Hoa','Long Khanh','Nhon Trach']},
    {name:'Khanh Hoa',cities:['Nha Trang','Cam Ranh','Ninh Hoa']}
  ]},
  { code:'YE', name:'Yemen', states:[
    {name:'Sana\'a',cities:['Sana\'a','Old City']},
    {name:'Aden',cities:['Aden','Al Mansoura']},
    {name:'Taiz',cities:['Taiz','Turba']},
    {name:'Hudaydah',cities:['Hudaydah','Beit Al-Faqih']},
    {name:'Hadramawt',cities:['Mukalla','Seyun','Tarim']},
    {name:'Ibb',cities:['Ibb','Jibla']}
  ]},
  { code:'ZM', name:'Zambia', states:[
    {name:'Lusaka',cities:['Lusaka','Chilanga','Kafue']},
    {name:'Copperbelt',cities:['Ndola','Kitwe','Chingola','Luanshya','Mufulira']},
    {name:'Southern',cities:['Livingstone','Mazabuka','Choma','Monze']}
  ]},
  { code:'ZW', name:'Zimbabwe', states:[
    {name:'Harare',cities:['Harare','Chitungwiza','Epworth']},
    {name:'Bulawayo',cities:['Bulawayo']},
    {name:'Manicaland',cities:['Mutare','Rusape','Chipinge']},
    {name:'Mashonaland',cities:['Bindura','Marondera','Chinhoyi']}
  ]}
];

// Sort countries alphabetically
WORLD_DATA.sort((a, b) => a.name.localeCompare(b.name));

// ─── 440+ BUSINESS NICHES ────────────────────────────────────────────────────
const NICHES = {
  "Food & Beverage": [
    "Restaurant","Cafe","Coffee Shop","Bakery","Pizza Restaurant","Burger Restaurant",
    "Fast Food","Chinese Restaurant","Indian Restaurant","Italian Restaurant",
    "Mexican Restaurant","Thai Restaurant","Japanese Restaurant","Sushi Restaurant",
    "BBQ Restaurant","Seafood Restaurant","Vegetarian Restaurant","Vegan Restaurant",
    "Ice Cream Shop","Dessert Shop","Juice Bar","Smoothie Bar","Food Truck",
    "Catering Service","Buffet Restaurant","Steakhouse","Sandwich Shop","Donut Shop",
    "Tea Shop","Boba Tea Shop","Waffle House","Pancake House","Noodle Shop",
    "Kebab Shop","Halal Restaurant","Biryani Restaurant","Diner","Bar & Grill",
    "Sports Bar","Rooftop Restaurant","Fine Dining","Buffet Restaurant","Food Court"
  ],
  "Hotels & Hospitality": [
    "Hotel","Motel","Hostel","Bed and Breakfast","Boutique Hotel","Resort",
    "Luxury Hotel","Budget Hotel","Extended Stay Hotel","Guest House","Inn",
    "Vacation Rental","Service Apartment","Airbnb","Homestay"
  ],
  "Health & Medical": [
    "Doctor","Dentist","Hospital","Clinic","Pharmacy","Medical Clinic",
    "Dental Clinic","Eye Clinic","Skin Clinic","Orthopedic Clinic",
    "Pediatrician","Gynecologist","Cardiologist","Neurologist","Psychiatrist",
    "Psychologist","Therapist","Chiropractor","Physiotherapist","Occupational Therapist",
    "Speech Therapist","Audiologist","Optician","Optometrist","Veterinarian",
    "Animal Hospital","Pet Clinic","Cosmetic Surgery","Plastic Surgeon",
    "Urologist","Oncologist","Radiologist","Pathologist","Blood Test Lab",
    "Diagnostic Center","Health Center","Urgent Care","Emergency Clinic",
    "Mental Health Clinic","Rehabilitation Center","Dialysis Center",
    "Fertility Clinic","IVF Center","Dental Lab","Orthodontist","Oral Surgeon",
    "Endodontist","Periodontist","Prosthodontist","Homeopathic Clinic",
    "Ayurvedic Clinic","Traditional Medicine","Acupuncture","Naturopath"
  ],
  "Beauty & Wellness": [
    "Hair Salon","Barbershop","Beauty Salon","Nail Salon","Spa","Day Spa",
    "Massage Therapy","Waxing Salon","Eyebrow Threading","Eyelash Extension",
    "Tattoo Studio","Piercing Studio","Tanning Salon","Makeup Artist",
    "Bridal Makeup","Facial Treatment","Skin Care Clinic","Laser Hair Removal",
    "Botox Clinic","Medspa","Hair Extensions","Keratin Treatment",
    "Hair Color Salon","Lice Treatment","Foot Spa","Reflexology","Yoga Studio",
    "Meditation Center","Wellness Center","Float Therapy","Cryotherapy",
    "Weight Loss Clinic","Dietitian","Nutritionist"
  ],
  "Fitness & Sports": [
    "Gym","Fitness Center","Personal Trainer","Yoga Studio","Pilates Studio",
    "CrossFit","Boxing Gym","MMA Gym","Martial Arts","Karate School",
    "Judo School","Taekwondo School","Dance Studio","Ballet School",
    "Zumba Class","Swimming Pool","Swimming School","Tennis Court","Tennis Club",
    "Golf Course","Golf Club","Football Club","Cricket Club","Sports Club",
    "Sports Complex","Badminton Court","Squash Court","Basketball Court",
    "Bowling Alley","Skating Rink","Rock Climbing","Cycling Studio",
    "Indoor Sports","Outdoor Sports","Sports Training","Athletic Training",
    "Football Academy","Cricket Academy","Sports Equipment Store"
  ],
  "Home Services": [
    "Plumber","Electrician","Handyman","Home Repair","Carpenter","Painter",
    "Roofing Contractor","HVAC Contractor","Air Conditioning Repair",
    "Heating Repair","Appliance Repair","Washing Machine Repair","AC Repair",
    "Refrigerator Repair","Microwave Repair","Pest Control","Exterminator",
    "Cleaning Service","House Cleaning","Maid Service","Laundry Service",
    "Dry Cleaning","Carpet Cleaning","Window Cleaning","Pressure Washing",
    "Pool Service","Pool Cleaning","Landscaping","Lawn Care","Tree Service",
    "Irrigation Service","Moving Company","Storage Service","Security System",
    "Locksmith","Home Automation","Interior Design","Architect","Contractor",
    "General Contractor","Flooring Contractor","Tile Work","Masonry",
    "Waterproofing","Insulation","Solar Panels","Water Heater Repair",
    "Gutter Cleaning","Chimney Sweep","Fire Alarm","CCTV Installation",
    "Furniture Assembly","Junk Removal","Waste Management"
  ],
  "Automotive": [
    "Car Repair","Auto Shop","Car Mechanic","Auto Mechanic","Tire Shop",
    "Oil Change","Car Wash","Car Detailing","Auto Body Shop","Collision Repair",
    "Windshield Repair","Car Dealer","Used Car Dealer","Auto Parts Store",
    "Motorcycle Repair","Bike Repair","Towing Service","Roadside Assistance",
    "Car Rental","Driving School","Auto Insurance","Vehicle Inspection",
    "Car Inspection","Brake Repair","Transmission Repair","Engine Repair",
    "Battery Replacement","Car Audio","Car Accessories","Fleet Service",
    "Truck Repair","Van Rental","Electric Car Charging","EV Service Center"
  ],
  "Education": [
    "School","Private School","International School","Tutoring Center",
    "Language School","English Language School","Driving School","Music School",
    "Art School","Cooking School","Dance School","Vocational Training",
    "College","University","Online Classes","Test Prep","IELTS Preparation",
    "TOEFL Preparation","SAT Prep","GRE Prep","Coding Bootcamp",
    "Computer Training","IT Training","Montessori","Kindergarten","Preschool",
    "Daycare","Nursery","After School Program","Summer Camp","Homeschool",
    "Tutoring","Math Tutoring","Science Tutoring","Library","Bookstore"
  ],
  "Professional Services": [
    "Lawyer","Law Firm","Attorney","Legal Services","Notary Public",
    "Accountant","Accounting Firm","Tax Preparation","Bookkeeping",
    "Financial Advisor","Insurance Agent","Insurance Company","Mortgage Broker",
    "Real Estate Agent","Property Management","Property Developer","Architect",
    "Engineering Firm","IT Consulting","Software Development","Digital Agency",
    "Marketing Agency","SEO Agency","Social Media Agency","Graphic Design",
    "Printing Service","Photography","Wedding Photographer","Videographer",
    "HR Consulting","Recruitment Agency","Staffing Agency","Security Company",
    "Private Investigator","Translation Service","Courier Service",
    "Business Consultant","Management Consultant","Event Planner","Wedding Planner"
  ],
  "Financial Services": [
    "Bank","Credit Union","ATM","Money Transfer","Loan Company",
    "Mortgage Company","Investment Company","Stock Broker","Currency Exchange",
    "Financial Planning","Wealth Management","Microfinance","Insurance Broker",
    "Tax Advisor","Certified Public Accountant","Auditor","Payroll Service",
    "Leasing Company","Pawn Shop","Gold Buyer","Check Cashing"
  ],
  "Real Estate": [
    "Real Estate Agency","Property Agency","Real Estate Developer","Property Developer",
    "Apartment Rental","House Rental","Commercial Real Estate","Property Management",
    "Real Estate Appraiser","Home Inspector","Mortgage Broker","Land Surveyor",
    "Property Law Firm","Title Company","Escrow Service"
  ],
  "Retail & Shopping": [
    "Supermarket","Grocery Store","Convenience Store","Clothing Store","Shoe Store",
    "Jewelry Store","Watch Store","Electronics Store","Phone Shop","Computer Store",
    "Appliance Store","Furniture Store","Home Decor Store","Hardware Store",
    "Toy Store","Book Store","Sports Store","Outdoor Store","Pet Store",
    "Baby Store","Pharmacy","Cosmetics Store","Perfume Shop","Optical Store",
    "Fabric Store","Craft Store","Art Supply Store","Office Supply Store",
    "Wholesale Market","Dollar Store","Thrift Store","Antique Shop",
    "Gift Shop","Souvenir Shop","Florist","Garden Center","Butcher Shop",
    "Fish Market","Bakery","Candy Store","Health Food Store",
    "Organic Store","Liquor Store","Tobacco Shop","Vape Shop","Bike Shop",
    "Musical Instrument Store","Camera Store","Luggage Store","Auto Parts Store"
  ],
  "Entertainment & Leisure": [
    "Movie Theater","Cinema","Nightclub","Bar","Pub","Karaoke Bar","Lounge",
    "Comedy Club","Theater","Concert Venue","Live Music Venue","Escape Room",
    "Arcade","Gaming Center","Bowling Alley","Mini Golf","Go Kart",
    "Trampoline Park","Indoor Play Area","Children's Play Center",
    "Amusement Park","Theme Park","Water Park","Zoo","Aquarium",
    "Museum","Art Gallery","Cultural Center","Library","Exhibition Center",
    "Event Venue","Banquet Hall","Wedding Venue","Party Hall","Club",
    "Casino","Billiards Hall","Pool Hall","Outdoor Cinema","Drive-In Theater",
    "Paintball","Laser Tag","Virtual Reality","Gaming Lounge","Hookah Lounge","Shisha Cafe"
  ],
  "Technology & IT": [
    "IT Support","Computer Repair","Phone Repair","Laptop Repair",
    "Data Recovery","Network Services","Web Design","App Development",
    "Software Company","Cloud Services","Cybersecurity","Digital Marketing",
    "SEO Services","Social Media Management","Graphic Design","Printing Services",
    "CCTV Installation","Security Systems","Smart Home","Drone Services",
    "3D Printing","Electronics Repair","Coding Classes"
  ],
  "Travel & Tourism": [
    "Travel Agency","Tour Operator","Tour Guide","Tourism Company",
    "Visa Services","Passport Services","Airport Transfer","Car Rental",
    "Taxi Service","Ride Sharing","Limousine Service","Charter Bus",
    "Boat Rental","Yacht Charter","Adventure Tourism","Eco Tourism",
    "Safari","Camping","Hiking Guide","Travel Insurance","Foreign Exchange"
  ],
  "Logistics & Transportation": [
    "Freight Company","Shipping Company","Courier Service","Delivery Service",
    "Moving Company","Storage Facility","Warehouse","Cold Storage",
    "Customs Broker","Logistics Company","Import Export","Trucking Company",
    "Cargo Company","Air Freight","Sea Freight","Last Mile Delivery",
    "Express Delivery","Same Day Delivery","Parcel Delivery"
  ],
  "Religious & Community": [
    "Church","Mosque","Temple","Synagogue","Buddhist Temple","Hindu Temple",
    "Community Center","Charity","Non-Profit","Social Service","Food Bank",
    "Youth Center","Senior Center","Women\'s Center","Counseling Center",
    "Shelter","Orphanage","Day Care Center","Rehabilitation Center"
  ],
  "Construction & Trades": [
    "Construction Company","Building Contractor","Civil Engineer",
    "Structural Engineer","Architect","Interior Designer","Renovation Company",
    "Demolition Company","Excavation","Foundation Contractor","Concrete Company",
    "Steel Fabrication","Glass Company","Aluminium Fabrication","Window Company",
    "Door Company","Roofing Company","Waterproofing Company","Insulation Contractor",
    "Painting Contractor","Electrical Contractor","Plumbing Contractor",
    "HVAC Contractor","Fire Protection","Scaffolding Company","Crane Service",
    "Equipment Rental","Building Materials","Lumber Yard","Cement Company"
  ],
  "Agriculture & Food Industry": [
    "Farm","Organic Farm","Nursery","Plant Nursery","Agricultural Supply",
    "Seed Store","Pesticide Store","Irrigation Service","Food Processing",
    "Dairy Farm","Poultry Farm","Fish Farm","Livestock","Butcher",
    "Seafood Supplier","Grain Mill","Rice Mill","Sugar Mill","Oil Mill",
    "Cold Storage","Food Wholesale","Restaurant Supply"
  ],
  "Wedding & Events": [
    "Wedding Planner","Event Planner","Wedding Venue","Banquet Hall",
    "Catering Service","Wedding Photography","Wedding Videography",
    "Wedding Decoration","Florist","Wedding Cake","Wedding Dress Shop",
    "Bridal Boutique","Tuxedo Rental","Wedding DJ","Wedding Band",
    "Wedding Makeup Artist","Event Management","Corporate Events",
    "Party Supplies","Balloon Decoration","Tent Rental","Audio Visual Service"
  ],
  "Manufacturing & Industrial": [
    "Factory","Manufacturing Plant","Metal Fabrication","Welding",
    "Machining Shop","Printing Factory","Textile Mill","Garment Factory",
    "Plastic Manufacturing","Rubber Products","Chemical Company",
    "Pharmaceutical Manufacturer","Furniture Manufacturer","Electronics Manufacturer",
    "Packaging Company","Label Printing","Sign Making","Screen Printing",
    "Embroidery","Industrial Equipment","Industrial Supplies"
  ]
};

// Flatten niches for simple dropdown
const NICHE_LIST = [];
for (const [cat, items] of Object.entries(NICHES)) {
  items.forEach(item => NICHE_LIST.push({ category: cat, name: item }));
}
NICHE_LIST.sort((a, b) => a.name.localeCompare(b.name));
