import React, { useState, useEffect } from "react";
import Selector from "../Selector/Selector";
import WordCloud from "../WordCloud/WordCloud";
import SankeyChart from "../SankeyChart/SankeyChart";
import "./AppContainer.css";

const output = [
  {
    id: "http://www.jstor.org/stable/44794539",
    datePublished: "2014-01-01",
    keyphrase:
      "landscape architecture architecture magazine schuylkill sister cities landscape architecture magazine schuylkill banks paines park schuylkill river downtown dog park",
    sourceCategory: [
      "Architecture & Architectural History",
      "Garden & Landscape",
      "Arts",
    ],
    tdmCategory: [
      "Arts - Applied arts",
      "Political science - Political geography",
    ],
    title: "SPECIAL INTERESTS",
  },
  {
    id: "ark://27927/phwzk71f6t",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters skateboard tricks skating subculture plazas nollie backside hubba hideout hideout",
    tdmCategory: ["Arts - Applied arts"],
    title: "1. Skateboarding and the City",
  },
  {
    id: "ark://27927/phzfjg1hxb4",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters landmark achievements public space tricks subculture carlsbad gap spaces chris cole skating skateboard",
    tdmCategory: ["Law - Computer law"],
    title: "8. Landmark Achievements: The Creation of Subcultural Landmarks",
  },
  {
    id: "ark://27927/pjbj15gxrxv",
    datePublished: "2023-01-01",
    keyphrase:
      "participants cultural community learning skateboard contribute contributing explains franklin skatepark big brother something franklin",
    tdmCategory: ["Arts - Literature"],
    title:
      "Chapter Nine: Learning to Contribute, Contributing to Learn(ing): Why Learning Happens at Franklin Skatepark",
  },
  {
    id: "ark://27927/phzbqh0m3s5",
    datePublished: "2019-06-01",
    keyphrase:
      "skaters ageing tired video ageing skaters older skaters lifestyle sports tricks skate videos subcultural capital skating",
    tdmCategory: ["Social sciences - Communications"],
    title:
      "Skateboarding and the ‘Tired Generation’: Ageing in Youth Cultures and Lifestyle Sports",
  },
  {
    id: "ark://27927/phx8cb53qx",
    datePublished: "2011-12-14",
    keyphrase:
      "passive medio passive external argument middle voice active alexiadou passive voice alexiadou anagnostopoulou hebrew dispositional",
    tdmCategory: ["Linguistics - Grammar"],
    title:
      "The syntactic construction of two non-active Voices: Passive and middle",
  },
  {
    id: "ark://27927/pjb4k401q1p",
    datePublished: "2022-05-01",
    keyphrase:
      "misogyny online manhood acts gender online abuse comments youtube skating skaters athletes",
    tdmCategory: [
      "Philosophy - Applied philosophy",
      "Law - Computer law",
      "Social sciences - Communications",
    ],
    title:
      "‘Who unlocked the kitchen?’: Online misogyny, YouTube comments and women's professional street skateboarding",
  },
  {
    id: "ark://27927/pjbmz4p7z2q",
    datePublished: "2023-11-01",
    keyphrase:
      "hang gliding haakonsen snowboarding bungee hillary bmx riding bungee jumping bungee jump big wave glider",
    tdmCategory: ["Arts - Performing arts"],
    title: "[H]",
  },
  {
    id: "http://www.jstor.org/stable/j.ctv21fqj9g.22",
    datePublished: "2021-01-01",
    keyphrase:
      "matthew shipp antipop consortium sounds like shipp william william parker knives from heaven musics roy christopher knives improvisation",
    sourceCategory: ["Language & Literature", "Music"],
    tdmCategory: ["Arts - Performing arts"],
    title: "Heavy Meta",
  },
  {
    id: "ark://27927/phw8tdrh7j",
    datePublished: "2017-05-01",
    keyphrase:
      "stranger here zachary skate park zachary gerberick racquetball mother apartment blue tarp cinder block watching loud man",
    tdmCategory: ["Arts - Applied arts", "Applied sciences - Technology"],
    title: "A Stranger Here",
  },
  {
    id: "ark://27927/pbd87b1h53",
    datePublished: "2009-01-01",
    keyphrase:
      "skaters masculinity rpp freedom skate life skateboard four wheels culture mainstream skating yochim",
    tdmCategory: ["Social sciences - Psychology"],
    title:
      "Freedom on four wheels: Individuality, Self-Expression, and Authentic Masculinity in a Skateboarding Community",
  },
  {
    id: "ark://27927/pjb5xwzz8v1",
    datePublished: "2022-08-01",
    keyphrase:
      "skaters infrastructure skate video urban infrastructure skater gaze skateboard handrail curry connection cities videos",
    tdmCategory: [
      "Political science - Political geography",
      "Social sciences - Communications",
    ],
    title:
      "The draw of dysfunction: India’s urban infrastructure in skateboard video",
  },
  {
    id: "ark://27927/phx3ns5rzfk",
    datePublished: "2017-01-01",
    keyphrase:
      "unauthorized copying user agreement truck junkyard modesto merced skate punk wacky loose song wacky brilliantly indestructible resreved unauthorized jacaranda red",
    tdmCategory: ["Arts - Applied arts"],
    title: "California Corridor",
  },
  {
    id: "ark://27927/phzmdts0xkz",
    datePublished: "2021-01-01",
    keyphrase:
      "skaters shenzhen urban landscapes concrete dragon skate videos footage shanghai deng xiaoping security guards skate spots",
    tdmCategory: ["Physical sciences - Astronomy"],
    title: "3. Chasing the Concrete Dragon",
  },
  {
    id: "http://www.jstor.org/stable/41107149",
    datePublished: "2000-01-01",
    keyphrase:
      "skaters skateboard skating amsterdam lia karsten skate park eva pel skate spots public space skateboard scene",
    sourceCategory: ["Architecture & Architectural History", "Arts"],
    tdmCategory: ["Applied sciences - Engineering"],
    title:
      "Skateboarders exploring urban public space: Ollies, obstacles and conflicts",
  },
  {
    id: "http://www.jstor.org/stable/26477364",
    datePublished: "2018-07-01",
    keyphrase:
      "skaters libertarian adidas peterson amateurs riders professional skater cory kennedy outsiders pro skaters",
    sourceCategory: ["Language & Literature", "Humanities"],
    tdmCategory: ["Arts - Literature"],
    title: "A Crime and a Pastime",
  },
  {
    id: "ark://27927/pjbmz4p85p7",
    datePublished: "2023-11-01",
    keyphrase:
      "extreme sports established sports established devotees modernity football berkshire encyclopedia bungee jumping late modernity participants",
    tdmCategory: ["Social sciences - Behavioral sciences"],
    title: "[M]",
  },
  {
    id: "ark://27927/pjbj15gxq10",
    datePublished: "2023-01-01",
    keyphrase:
      "skaters participation snaking experienced skaters learning spatial production skating franklin skatepark picnic cultural community",
    tdmCategory: ["Social sciences - Psychology"],
    title:
      "Chapter Five: Participation Structures and Spatial Production of/at Franklin Skatepark",
  },
  {
    id: "ark://27927/pbd87t4160",
    datePublished: "2009-01-01",
    keyphrase:
      "scabby itchy fuzzy jittery lazily recycling acne scars flies outdo visible via itchy witnesses jittery moving outdo everyone scabby itchy witnesses",
    tdmCategory: ["Biological sciences - Biology"],
    title: "Kickflip",
  },
  {
    id: "ark://27927/phzmdts0xpm",
    datePublished: "2021-01-01",
    keyphrase:
      "skate video skaters urban landscapes skate spots infrastructure urban fabric rolling ethnography shredding ethnography skate culture",
    tdmCategory: ["Arts - Art history"],
    title: "2. Shredding the Urban Fabric",
  },
  {
    id: "http://www.jstor.org/stable/26972279",
    datePublished: "2019-06-01",
    keyphrase:
      "skaters ageing tired video ageing skaters older skaters lifestyle sports subcultural capital tricks skate videos skating",
    sourceCategory: ["Sociology", "Social Sciences"],
    tdmCategory: ["Social sciences - Communications"],
    title: "Skateboarding and the ‘Tired Generation’",
  },
  {
    id: "ark://27927/pjbhvfqc23r",
    datePublished: "2023-01-01",
    keyphrase:
      "skaters participation snaking experienced skaters learning spatial production skating franklin skatepark picnic cultural community",
    tdmCategory: ["Social sciences - Psychology", "Arts - Performing arts"],
    title:
      "Chapter Five: Participation Structures and Spatial Production of/at Franklin Skatepark",
  },
  {
    id: "ark://27927/phzmdts0zzj",
    datePublished: "2021-01-01",
    keyphrase:
      "skaters skate video urban landscapes frontiers new frontiers handrail inding spots tehran pro skaters wallner",
    tdmCategory: ["Applied sciences - Engineering"],
    title: "6. Skateboarding&#39;s New Frontiers",
  },
  {
    id: "ark://27927/phwzk71c7c",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters skateboard activism courthouse stoner aaron snyder alec beck stoner plaza photo aaron skating instagram",
    tdmCategory: ["Social sciences - Communications"],
    title: "9. Skateboard Activism",
  },
  {
    id: "ark://27927/phwzk71dwp",
    datePublished: "2017-01-01",
    keyphrase:
      "skating skaters skateboard nollie skateboarding basics tricks switch switch nollie green bay california",
    tdmCategory: [
      "Arts - Literature",
      "Arts - Performing arts",
      "Arts - Applied arts",
    ],
    title: "3. Skateboarding Basics: The Grammar of Skateboarding Tricks",
  },
  {
    id: "ark://27927/pjb27j06mtq",
    datePublished: "2018-01-01",
    keyphrase:
      "sidewalk skater shredding road rash precolonial polynesians skateboard burnquist grind bob burnquist smooth everywhere milkweed grow",
    tdmCategory: [
      "Biological sciences - Agriculture",
      "Applied sciences - Technology",
    ],
    title: "Nine Things I Learned about Nature on My Skateboard",
  },
  {
    id: "ark://27927/phzmdts0zm1",
    datePublished: "2021-01-01",
    keyphrase:
      "skaters soviet urban landscapes abkhazia soviet planning marble pro skater soviet asia wallner square",
    tdmCategory: ["Arts - Art history"],
    title: "5. For the Love of Soviet Planning",
  },
  {
    id: "ark://27927/phwzk71fm1",
    datePublished: "2017-01-01",
    keyphrase:
      "backside nollie nollie heelflip subculture aaron snyder heelflip backside backside nollie backside lipslide filmers nollie heelflip backside",
    tdmCategory: ["Arts - Performing arts"],
    title: "Index",
  },
  {
    id: "ark://27927/pbd9dfm8zq",
    datePublished: "2012-03-23",
    keyphrase:
      "corpus gisle andersen norwegian newspapers andersen knut gisle andersen knut large corpus newspaper corpus norwegian newspaper language",
    sourceCategory: [
      "Corpus linguistics",
      "Discourse studies",
      "Germanic linguistics",
    ],
    tdmCategory: [
      "Information science - Information resources",
      "Information science - Informetrics",
      "Linguistics - Language",
    ],
    title: "Exploring Newspaper Language",
  },
  {
    id: "ark://27927/phzfjg1hzgv",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters subculture skating skateboard skate spots tricks graffiti aaron snyder spaces public space",
    tdmCategory: [
      "Arts - Literature",
      "Law - Computer law",
      "Social sciences - Communications",
    ],
    title: "Introduction",
  },
  {
    id: "http://www.jstor.org/stable/26450932",
    datePublished: "2018-05-01",
    keyphrase:
      "sidewalk skater shredding road rash precolonial polynesians skateboard burnquist grind bob burnquist skaters paradise smooth everywhere",
    sourceCategory: ["Language & Literature", "Humanities"],
    tdmCategory: ["Arts - Applied arts"],
    title: "Nine Things I Learned about Nature on My Skateboard",
  },
  {
    id: "http://www.jstor.org/stable/44674114",
    datePublished: "2005-06-01",
    keyphrase:
      "landscape architecture terri nostrand enthusiasts redheaded stepchild skateboard enthusiasts fiind raisers architecture students thompson fasla students landforms",
    sourceCategory: [
      "Architecture & Architectural History",
      "Garden & Landscape",
      "Arts",
    ],
    tdmCategory: [
      "Education - Formal education",
      "Applied sciences - Engineering",
    ],
    title: "Land Matters",
  },
  {
    id: "ark://27927/phwzk71d28",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters landmark achievements public space tricks subculture carlsbad gap spaces chris cole skating skateboard",
    tdmCategory: ["Law - Computer law", "Arts - Art history"],
    title: "8. Landmark Achievements: The Creation of Subcultural Landmarks",
  },
  {
    id: "ark://27927/pgh1smd9gb9",
    datePublished: "2011-07-01",
    keyphrase:
      "motorischen lernen beim motorischen ollie kickflip gehirn abspielt den ollie beim motorischen lernen visuell akustisch ollie motorisches lernprozess nennt bewegungs wahrnehmung",
    tdmCategory: ["Arts - Performing arts"],
    title: "physiografik: Motorisches Lernen – Dopamin-Kick für Ollie",
  },
  {
    id: "http://www.jstor.org/stable/44670930",
    datePublished: "1998-03-01",
    keyphrase:
      "landscape architects design skateboard thatcher handrails mclntyre thrasher fishman asla kevin thatcher skateboard parks",
    sourceCategory: [
      "Architecture & Architectural History",
      "Garden & Landscape",
      "Arts",
    ],
    tdmCategory: ["Arts - Applied arts"],
    title: "A Good Thrashing",
  },
  {
    id: "ark://27927/phz957x1z6w",
    datePublished: "2012-01-01",
    keyphrase:
      "teaching teachers learning students classroom effective teachers teaching methods instructional organizing instruction instruction",
    tdmCategory: ["Education - Formal education"],
    title: "Effective Strategies for Teaching in K-8 Classrooms",
  },
  {
    id: "http://www.jstor.org/stable/j.ctv65sw5s.6",
    datePublished: "2010-01-01",
    keyphrase:
      "skaters masculinity skate life skateboard culture mainstream skating yochim sports people",
    sourceCategory: ["Sociology"],
    tdmCategory: ["Social sciences - Psychology"],
    title: "“Freedom on four wheels”:",
  },
  {
    id: "ark://27927/pgh11qvgk8w",
    datePublished: "2014-09-01",
    keyphrase:
      "growth firms industry representative declining industries representative firms value propositions high growth firms industry representative firms strat entrepreneurship proposition customers",
    tdmCategory: [
      "Information science - Informetrics",
      "Business - Business operations",
    ],
    title:
      "Customer Value Propositions in Declining Industries: Differences between Industry Representative and High‐Growth Firms",
  },
  {
    id: "ark://27927/phz955hsq1x",
    datePublished: "2013-01-01",
    keyphrase:
      "students sentence dragon roared astronaut repaired sentence patterns floodlight flashlight skillful writers hubble repaired the hubble",
    tdmCategory: ["Linguistics - Grammar"],
    title:
      "Tools Students Need to Be Skillful Writers: Building Better\n                    Sentences",
  },
  {
    id: "ark://27927/pjb5bf3j06k",
    datePublished: "2021-09-16",
    keyphrase:
      "matthew shipp antipop consortium sounds like shipp william william parker knives from heaven musics roy christopher knives improvisation",
    tdmCategory: ["Arts - Performing arts"],
    title: "Heavy Meta",
  },
  {
    id: "ark://27927/phzmdts0z92",
    datePublished: "2021-01-01",
    keyphrase:
      "skaters spectacle urban landscapes cities tacle cities skate video spectacle cities pro skater luxury skating",
    tdmCategory: ["Arts - Art history"],
    title: "4. Spectacle Cities: The Luxury of Emptiness",
  },
  {
    id: "ark://27927/phzgnz87t0m",
    datePublished: "2020-01-01",
    keyphrase:
      "gaming intersectional tech screen differently abled gamers disability design inclusive design red pants black deaf",
    tdmCategory: [
      "Philosophy - Applied philosophy",
      "Biological sciences - Biology",
      "Applied sciences - Systems science",
      "Social sciences - Communications",
      "Arts - Literature",
      "Social sciences - Behavioral sciences",
    ],
    title:
      "#TechFail: From Intersectional (In)Accessibility to Inclusive Design",
  },
  {
    id: "ark://27927/phwzk71dk1",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters subculture skating skateboard skate spots tricks graffiti aaron snyder spaces public space",
    tdmCategory: [
      "Law - Computer law",
      "Arts - Literature",
      "Social sciences - Communications",
    ],
    title: "Introduction",
  },
  {
    id: "ark://27927/phzfjg1j1sb",
    datePublished: "2017-01-01",
    keyphrase:
      "backside nollie nollie heelflip subculture aaron snyder heelflip backside backside nollie backside lipslide filmers nollie heelflip backside",
    tdmCategory: ["Arts - Performing arts"],
    title: "Index",
  },
  {
    id: "ark://27927/phzfjmf10w8",
    datePublished: "2018-01-01",
    keyphrase:
      "chivers yochim sports yochim skate matthew atencio youth sports holly thorpe becky beal skate park tony hawk jay coakley",
    tdmCategory: ["Social sciences - Communications"],
    title: "Notes\t",
  },
  {
    id: "ark://27927/phzfjg1j12r",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters skateboard tricks skating subculture plazas nollie backside hubba hideout hideout",
    tdmCategory: ["Arts - Applied arts"],
    title: "1. Skateboarding and the City",
  },
  {
    id: "ark://27927/phz31m7mx74",
    datePublished: "2018-06-08",
    keyphrase:
      "camper desert dowsing pleiades mother estie jamie estie wakes father headlamps plywood ramps",
    tdmCategory: ["Arts - Performing arts"],
    title: "Hark, Sister, Have Ye Struck the Brook?",
  },
  {
    id: "http://www.jstor.org/stable/26492817",
    datePublished: "2018-07-01",
    keyphrase:
      "michael dickman probly upstream poetry anything else floats backyard probly theyre lilac tree meanwhile",
    sourceCategory: ["Language & Literature", "Humanities"],
    tdmCategory: ["Applied sciences - Technology", "Arts - Applied arts"],
    title: "Lakes Rivers Streams",
  },
  {
    id: "ark://27927/pbd87t5bw4",
    datePublished: "2009-01-01",
    keyphrase:
      "taj mahal flyover state leather jacket american camel pioneer rooms sky falling helen caught conversion narrative neighborhood watch pain wing",
    tdmCategory: ["Biological sciences - Biology", "Arts - Performing arts"],
    title: "CONTENTS",
  },
  {
    id: "ark://27927/pjbddrzmr84",
    datePublished: "2023-04-01",
    keyphrase:
      "skaters soviet skate video abkhazia memory video file wallner central asia statue memory studies",
    tdmCategory: ["Arts - Art history", "Physical sciences - Astronomy"],
    title:
      "The ludic lives of memoryscapes: Skateboarding post-Soviet peripheries",
  },
  {
    id: "ark://27927/pjbxffw66k",
    datePublished: "2021-12-01",
    keyphrase:
      "skateboard mullen rodney mullen network skate videos wwwyoutubecom watch accessed mediators agency network theory",
    tdmCategory: [
      "Arts - Performing arts",
      "Arts - Literature",
      "Social sciences - Communications",
    ],
    title:
      "Skateboarders’ Representations of Materiality: A Case Study of Rodney Mullen and Spike Jonze",
  },
  {
    id: "http://www.jstor.org/stable/41502414",
    datePublished: "2012-03-01",
    keyphrase:
      "passive medio passive external argument active middle artemis alexi middle voice edit doron adou edit alexiadou",
    sourceCategory: ["Linguistics", "Social Sciences"],
    tdmCategory: ["Linguistics - Grammar"],
    title:
      "The syntactic construction of two non-active Voices: Passive and middle",
  },
  {
    id: "ark://27927/phx68dtbmrd",
    datePublished: "2017-01-01",
    keyphrase:
      "murmurers alas alit vocalize xwell owen lushly oceanic inspiringly massive loony lonely prosodic retardation thine brusque vats manure acid oblations",
    tdmCategory: ["Biological sciences - Biology"],
    title: "Prosodic Retardation",
  },
  {
    id: "ark://27927/phzbq79xn5k",
    datePublished: "2019-08-01",
    keyphrase:
      "markus digital media learning symbiotic learning action sports learners warehouse district learning partnerships partnerships skater",
    tdmCategory: ["Arts - Performing arts"],
    title:
      "Symbiotic learning partnerships in youth action sports: Vibing, rhythm, and analytic cycles",
  },
  {
    id: "ark://27927/pbd857s0x3",
    datePublished: "2013-01-01",
    keyphrase:
      "truck junkyard modesto merced skate punk wacky loose song wacky brilliantly indestructible jacaranda red train rumbles huge pallets salvation windmills",
    tdmCategory: ["Arts - Applied arts", "Biological sciences - Agriculture"],
    title: "California Corridor",
  },
  {
    id: "ark://27927/phzfjg1hvn2",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters skateboard activism courthouse stoner aaron snyder alec beck stoner plaza photo aaron skating instagram",
    tdmCategory: ["Social sciences - Communications"],
    title: "9. Skateboard Activism",
  },
  {
    id: "http://www.jstor.org/stable/44672952",
    datePublished: "1999-10-01",
    keyphrase:
      "landscape landscape architects tree logic landscape architecture gravity defying edsel and eleanor jens jensen riprap conservation skaters",
    sourceCategory: [
      "Architecture & Architectural History",
      "Garden & Landscape",
      "Arts",
    ],
    tdmCategory: [
      "Biological sciences - Ecology",
      "Environmental studies - Environmental philosophy",
    ],
    title: "riprap",
  },
  {
    id: "ark://27927/phzfjg1j0gv",
    datePublished: "2017-01-01",
    keyphrase:
      "skating skaters skateboard nollie skateboarding basics tricks switch switch nollie green bay california",
    tdmCategory: [
      "Arts - Literature",
      "Arts - Performing arts",
      "Arts - Applied arts",
    ],
    title: "3. Skateboarding Basics: The Grammar of Skateboarding Tricks",
  },
  {
    id: "ark://27927/pjbhvfqc41p",
    datePublished: "2023-01-01",
    keyphrase:
      "participants cultural community learning skateboard contribute contributing explains franklin skatepark big brother something franklin",
    tdmCategory: ["Arts - Literature"],
    title:
      "Chapter Nine: Learning to Contribute, Contributing to Learn(ing): Why Learning Happens at Franklin Skatepark",
  },
  {
    id: "ark://27927/phzhz4f12hp",
    datePublished: "2020-01-01",
    keyphrase:
      "like stride disembarking soothing stinted tricks whiskey texting asides bored notebooks unlocked hearts disembarking failures scribbling atop glistening poetic asides",
    tdmCategory: ["Arts - Applied arts", "Social sciences - Communications"],
    title: "Like Stride",
  },
  {
    id: "ark://27927/pjbj39m7j6q",
    datePublished: "2023-09-05",
    keyphrase:
      "occupied joy palestinian palestine skating resistance skaters palestinian skateboarding palestinian skaters mbembe settler colonialism",
    tdmCategory: ["Philosophy - Applied philosophy"],
    title: "Occupied Joy: The Politics of Skateboarding in Palestine",
  },
  {
    id: "http://www.jstor.org/stable/j.ctv21fqj9g",
    datePublished: "2021-01-01",
    keyphrase:
      "roy christopher dominic pettman punctum books writing working carla nappi academia mark dery sayyid together",
    sourceCategory: ["Language & Literature", "Music"],
    tdmCategory: ["Arts - Literature"],
    title: "Follow for Now, Volume 2",
  },
  {
    id: "http://www.jstor.org/stable/j.ctv65sw5s",
    datePublished: "2010-01-01",
    keyphrase:
      "angeles times los angeles times york times new york times masculinity skate life washington post subcultures reader culture skaters kickflip",
    sourceCategory: ["Sociology"],
    tdmCategory: ["Arts - Literature"],
    title: "Skate Life",
  },
  {
    id: "ark://27927/phwzk71dcx",
    datePublished: "2017-01-01",
    keyphrase:
      "skaters skating switch skateboard stoner tricks skate plaza nick tucker stoner plaza courthouse",
    tdmCategory: [
      "Arts - Performing arts",
      "Social sciences - Communications",
      "Arts - Literature",
      "Arts - Applied arts",
    ],
    title: "4. Professional Street Skateboarding",
  },
  {
    id: "ark://27927/phz9dfzvfng",
    datePublished: "2018-01-01",
    keyphrase:
      "skaters kickflip skateboard chivers yochim sports yochim skate matthew atencio youth sports holly thorpe becky beal skate park tony hawk jay coakley",
    tdmCategory: ["Social sciences - Communications"],
    title: "[Chapter]",
  },
];

const source = "skaters";
const target = "skateboard";
const third = "kickflip";

const occurrences = {
  [`${source}_${target}`]: 0,
  [`${source}_${third}`]: 0,
  [`${source}_${target}_${third}`]: 0,
};

output.forEach((entry) => {
  const keyphrases = entry.keyphrase.split(" ");

  // Check if "skaters" and "skateboard" coexist but "kickflip" does not
  if (
    keyphrases.includes(source) &&
    keyphrases.includes(target) &&
    !keyphrases.includes(third)
  ) {
    occurrences[`${source}_${target}`]++;
  }

  // Check if "skaters" and "kickflip" coexist but "skateboard" does not
  if (
    keyphrases.includes(source) &&
    keyphrases.includes(third) &&
    !keyphrases.includes(target)
  ) {
    occurrences[`${source}_${third}`]++;
  }

  // Check if all three words coexist
  if (
    keyphrases.includes(source) &&
    keyphrases.includes(target) &&
    keyphrases.includes(third)
  ) {
    occurrences[`${source}_${target}_${third}`]++;
  }
});

const sData = {
  nodes: [{ id: source }, { id: target }, { id: third }],
  links: [
    {
      source: source,
      target: target,
      value: occurrences[`${source}_${target}`],
    },
    { source: source, target: third, value: occurrences[`${source}_${third}`] },
    {
      source: target, // Change source to target
      target: third,
      value: occurrences[`${source}_${target}_${third}`],
    },
  ],
};

function AppContainer() {
  const [topKeyphrases, setTopKeyphrases] = useState([]);
  const [allKeyphrases, setAllKeyphrases] = useState([]);
  const [selectedKeyphrases, setSelectedKeyphrases] = useState([]);

  useEffect(() => {
    fetch("/output.json")
      .then((response) => response.json())
      .then((data) => {
        const { keyphrasesTFIDF } = data;
        const top10 = keyphrasesTFIDF
          .slice(0, 10)
          .map((item) => item.keyphrase);
        setTopKeyphrases(top10);
        const allKeyphrases = keyphrasesTFIDF.map((item) => item.keyphrase);
        setAllKeyphrases(allKeyphrases);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="AppContainer">
      <header className="AppContainer-header">
        <div className="selector-wordcloud-container">
          <Selector
            topKeyphrases={topKeyphrases}
            selectedKeyphrases={selectedKeyphrases}
            setSelectedKeyphrases={setSelectedKeyphrases}
          />
          <WordCloud allKeyphrases={allKeyphrases} />
        </div>
        <SankeyChart data={sData} />
      </header>
    </div>
  );
}

export default AppContainer;
