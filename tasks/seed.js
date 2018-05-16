const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const users = data.users;
const games = data.games;

const main = async () => {
  const db = await dbConnection();
  await db.dropDatabase();
  const admin = await users.addUser("123456", "admin","admin",["1","2"]);
  const game1 = await games.addGame("Dragon Ball Z",
  "Goku, Vegeta, Cell, Frieza, and more arrive to battle it out in this new fighting game from the minds behind the Guilty Gear series.",
  9,
  new Date(2018, 2, 15),
  "Arc System Words",
  "Bandai Namco Games",
  ["Action","2D","Fighting"]);
  const game2 = await games.addGame("Fifa18",
  "All-out attacking overshadows defensive stability in a spectacular but shallow game.",
  8,
  new Date(2017, 8, 29),
  "Electronic Arts",
  "Electronic Arts",
  ["Sports","3D"]);

  const game3 = await games.addGame("Fifa17",
  "An absorbing story mode compensates for an occasional lack of match sharpness.",
  8.4,
  new Date(2016, 8, 21),
  "Electronic Arts",
  "Electronic Arts",
  ["Sports","3D"]);

  const game4 = await games.addGame("Legend of Zelda Breath of the Wild",
  "The story follows Link, who awakens from a hundred-year slumber to a mysterious voice that guides him to defeat Calamity Ganon before he can destroy the kingdom of Hyrule.",
  10.0,
  new Date(2017, 2, 3),
  "Nintendo games",
  "Nintendo games",
  ["Action","RPG","3D"]);

  const game5 = await games.addGame("Persona 5",
  "Persona 5 takes place in modern-day Tokyo, and follows the player-named protagonist after his transfer to the fictional Shujin Academy after being put on probation for an assault of which he was falsely accused. During the course of a school year, he and other students awaken to their Persona powers, becoming a group of secret vigilantes known as the Phantom Thieves of Hearts who explore the Metaverse, a supernatural realm consisting of the physical manifestation of humanity's subconscious desires, to change malevolent intent from the hearts of adults.",
  9.7,
  new Date(2017, 3, 4),
  "Atlus",
  "Sega",
  ["RPG","3D"]);

  const game6 = await games.addGame("Stardew valley",
  "In Stardew Valley, the player takes the role of a character who, to get away from the hustle of an office job, takes over their grandfather's dilapidated farm in a place known as Stardew Valley. ",
  8.8,
  new Date(2016, 1, 26),
  "Eric ConcernedApe Barone",
  "Chucklefish Limited",
  ["Simulation","2D"]);

  const game7 = await games.addGame("Tekken 7",
  "Set shortly after the events of Tekken 6, the plot focuses on the events leading up to the final battle between martial artist Heihachi Mishima and his son, Kazuya. ",
  9.5,
  new Date(2015, 2, 18),
  "Bandai Namco Games",
  "Bandai Namco Games",
  ["Fighting","3D"]);

  const game8 = await games.addGame("God of War 4",
  "Following the death of Kratos' second wife and Atreus' mother, they journey to fulfill her promise and spread her ashes at the highest peak of the nine realms. Kratos keeps his troubled past a secret from Atreus, who is also unaware of his true nature of being a god. Along their journey, they encounter monsters and gods of the Norse world.",
  10.0,
  new Date(2018, 3, 20),
  "Santa Monica Studio",
  "Sony Interactive Entertainment",
  ["Action","3D"]);

  const game10 = await games.addGame("The Legend of Zelda The Wind Waker",
  "The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred wish-granting relic.",
  9.8,
  new Date(2002, 11, 13),
  "Nintendo games",
  "Nintendo games",
  ["RPG"]);

  const game11 = await games.addGame("The Legend of Zelda A Link to the Past and Four Swords",
  "Four Swords is the multiplayer portion of the cartridge. Four Swords features gameplay similar to A Link to the Past, with a focus on multi-player; in it, two to four players must cooperatively work through a series of puzzle-laden dungeons, while competing to collect rupees.",
  9.7,
  new Date(2003, 2, 14),
  "Nintendo games",
  "Nintendo games",
  ["RPG"]);

  const game12 = await games.addGame("The Legend of Zelda Four Swords Adventures",
  "The game takes Link on an adventure to restore peace to Hyrule after learning that an evil counterpart of himself, Shadow Link, has been created.",
  8.7,
  new Date(2004, 2, 18),
  "Nintendo games",
  "Nintendo games",
  ["RPG"]);

  const game13 = await games.addGame("The Legend of Zelda The Minish Cap",
  "A magical talking cap named Ezlo can shrink series protagonist Link to the size of the Minish, a bug-sized race that live in Hyrule. ",
  9.0,
  new Date(2004, 10, 04),
  "Capcom",
  "Nintendo games",
  ["RPG"]);

  const game14 = await games.addGame("The Legend of Zelda Twilight Princess",
  "The story focuses on series protagonist Link, who tries to prevent Hyrule from being engulfed by a corrupted parallel dimension known as the Twilight Realm.",
  9.5,
  new Date(2006, 11, 2),
  "Nintendo games",
  "Nintendo games",
  ["RPG"]);

  const game15 = await games.addGame("The Legend of Zelda Phantom Hourglass",
  "The game's story follows that of The Wind Waker, focusing on series protagonist Link's journey to save his friend Tetra from the story's antagonist, Bellum, with the help of Captain Linebeck and his ship, the S.S. Linebeck.",
  9.0,
  new Date(2007, 5, 23),
  "Nintendo games",
  "Nintendo games",
  ["RPG"]);

  const game16 = await games.addGame("The Legend of Zelda Spirit Tracks",
  "Link, the protagonist of Spirit Tracks, travels across the game's overworld using a cannon-equipped steam train much like the steamboat in Phantom Hourglass.",
  9.3,
  new Date(2009, 11, 23),
  "Nintendo games",
  "Nintendo games",
  ["RPG"]);

  const game17 = await games.addGame("The Legend of Zelda Ocarina of Time 3D",
  "A remaster of the 1998 Nintendo 64 title The Legend of Zelda Ocarina of Time, it features mirrored versions of the rearranged dungeons from Ocarina of Time Master Quest, as well as updated graphics and added stereoscopic effects.",
  9.5,
  new Date(2011, 5, 16),
  "Nintendo games",
  "Nintendo games",
  ["Action","RPG","3D"]);

  const game18 = await games.addGame("The Legend of Zelda Skyward Sword",
  "Taking the role of series protagonist Link, players navigate the floating island of Skyloft and the land below it, completing quests that advance the story and solving environmental and dungeon-based puzzles.",
  10.0,
  new Date(2011, 10, 23),
  "Nintendo games",
  "Nintendo games",
  ["Action","RPG","3D"]);

  const game19 = await games.addGame("The Legend of Zelda The Wind Waker HD",
  "It is a remastered version of the 2002 GameCube game, The Legend of Zelda The Wind Waker.",
  9.8,
  new Date(2013, 10, 23),
  "Nintendo games",
  "Nintendo games",
  ["RPG"]);

  const game20 = await games.addGame("The Legend of Zelda A Link Between Worlds",
  "Players assume the role of a young boy named Link, who is tasked with restoring peace to the kingdom of Hyrule, after the malevolent sorcerer Yuga captures Princess Zelda and escapes through a rift to the ruined world of Lorule.",
  9.4,
  new Date(2013, 11, 22),
  "Nintendo games",
  "Nintendo games",
  ["RPG","2D"]);

  const game21 = await games.addGame("The Legend of Zelda Majora's Mask 3D",
  "Much like its predecessor, The Legend of Zelda Ocarina of Time 3D, Majora's Mask 3D is a remake of the original Majora's Mask game, featuring enhanced stereoscopic 3D graphics, touchscreen controls, and gyroscopic features. Like the original, the game follows Link, who is given only three days to save the land of Termina from being crushed by its moon, using various abilities obtained by wearing different masks. In addition, Nintendo changed the time mechanic of the original game, giving the player more time to explore, and added fishing.",
  8.7,
  new Date(2015, 1, 14),
  "Nintendo games",
  "Nintendo games",
  ["RPG"]);

  const game22 = await games.addGame("The Legend of Zelda Tri Force Heroes",
  "The Legend of Zelda Tri Force Heroes is a cooperative action-adventure game in which three players control differently colored versions of series protagonist Link and join forces to fight enemies and solve puzzles.",
  8.5,
  new Date(2015, 9, 22),
  "Nintendo games",
  "Nintendo games",
  ["RPG","2D"]);

  const game23 = await games.addGame("Anno 1404",
  "Though the game centers on a series of fictional events, the overall concept of the storyline is based upon real life aspects of medieval and renaissance history such as the Crusades, advancements in gothic architecture, construction of cathedrals, and hanseatic trade involving the rise of patrician merchants and early forms of capitalism.",
  8.2,
  new Date(2009, 5, 23),
  "Blue Byte",
  "Ubisoft",
  ["Simulation","Strategy"]);

  const game24 = await games.addGame("Anno 2070",
  "The scenario is set in the year 2070. Global warming has melted the Arctic ice cap, which has raised the global sea level so that the coasts were flooded. As a result, many old cities have vanished under the ocean, and much of what was once highland has been turned into chains of new islands. Responsibility for settling and exploiting these new frontiers is given to a select group of people, who captain mobile ocean-going bases known as Arks.",
  8.5,
  new Date(2011, 10, 17),
  "Blue Byte",
  "Ubisoft",
  ["Simulation","Strategy"]);

  const game25 = await games.addGame("Anno 2205",
  "Anno 2205 is a futuristic city-building video game similar to Anno 2070, as opposed to the previous installments which feature a historical setting. In the game, players take on the role of a leader from a corporation and must compete against other corporations in developing future technologies.",
  7.0,
  new Date(2015, 10, 3),
  "Blue Byte",
  "Ubisoft",
  ["Simulation","Strategy"]);

  const game26 = await games.addGame("Hatsune Miku Project DIVA",
  "The game primarily makes use of Vocaloids, a series of singing synthesizer software, and the songs created using these Vocaloids most notably the virtual-diva Vocaloid Hatsune Miku.",
  8.0,
  new Date(2009, 6, 2),
  "Sega",
  "Sega",
  ["Music","3D"]);

  const game27 = await games.addGame("Age of Empires II",
  "Players aim to gather resources, which they use to build towns, create armies, and defeat their enemies. There are five historically based campaigns, which constrict the player to specialized and story-backed conditions.",
  8.8,
  new Date(1999, 8, 30),
  "Ensemble Studios",
  "Microsoft",
  ["Strategy"]);

  const game28 = await games.addGame("Age of Empires III",
  "The game portrays the European colonization of the Americas, between approximately 1492 and 1876 AD. There are fourteen total civilizations to play within the game.",
  8.8,
  new Date(2005, 9, 18),
  "Ensemble Studios",
  "Microsoft",
  ["Strategy"]);

  const game40 = await games.addGame("The Sims 3",
  "Players control their own Sims' activities and relationships in a manner similar to real life. The game play is open-ended and does not have a defined goal.",
  8.9,
  new Date(2009, 5, 2),
  "The Sims Studio",
  "Electronic Arts",
  ["Simulation"]);

  const game41 = await games.addGame("NBA 2K18",
  "NBA 2K18, like the previous games in the series, is based on the sport of basketball; more specifically, it simulates the experience of the National Basketball Association (NBA).",
  8.4,
  new Date(2017, 8, 19),
  "Visual Concepts",
  "2K Sports",
  ["Sports"]);

  const game29 = await games.addGame("WWE 2K18",
  "WWE 2K18 is a professional wrestling game and for the first time since WWF SmackDown! Just Bring It, eight wrestlers are able to be in a match at once, instead of six (the Nintendo Switch version only supports six wrestlers in the ring).",
  7.0,
  new Date(2017, 9, 17),
  "Visual Concepts",
  "2K Sports",
  ["Sports"]);

  const game30 = await games.addGame("WWE 2K17",
  "There are a variety of different game modes in WWE 2K17. Unlike previous entries in the 2K series, WWE 2K17 initially didn't feature a single-player story mode in the base game (The Hall of Fame showcase was later added as DLC).",
  8.2,
  new Date(2016, 9, 11),
  "Visual Concepts",
  "2K Sports",
  ["Sports"]);

  const game31 = await games.addGame("Street Fighter V",
  "Street Fighter V carries on the 2D fighting gameplay of its predecessors, in which two fighters use a variety of attacks and special abilities to knock out their opponent.",
  9.0,
  new Date(2016, 1, 16),
  "Capcom",
  "Capcom",
  ["Fighting","2D"]);

  const game32 = await games.addGame("Tekken 6",
  "While the game retains elements from the previous games, the game introduces a new rage system that increases the strength of the playable characters when they are weakened. It also stars a hack and slash mode focused on a soldier named Lars Alexandersson.",
  8.8,
  new Date(2007, 10, 26),
  "Namco Bandai Games",
  "Namco Bandai Games",
  ["Fighting"]);

  const game33 = await games.addGame("Call of Duty WWII",
  "The game's campaign is set in the European theatre, and is centered around a squad in the 1st Infantry Division, following their battles on the Western Front, and set mainly in the historical events of Operation Overlord.",
  8.0,
  new Date(2017, 10, 3),
  "Sledgehammer Games",
  "Activision",
  ["Shooter"]);

  const game34 = await games.addGame("Call of Duty Modern Warfare 2",
  "The game's campaign follows the Task Force 141, a special forces unit fronted by Captain Soap MacTavish, as they hunt Vladimir Makarov, leader of the Russian Ultranationalist party, and the United States Army Rangers, who are defending the country from a Russian invasion.",
  9.5,
  new Date(2014, 5, 20),
  "Infinity Ward",
  "Activision",
  ["Shooter"]);

  const game35 = await games.addGame("Call of Duty Black Ops II",
  "The game's campaign follows up the story of Black Ops and is set in two different time periods; the late 1980s and 2025. In the 80s, the player switches control between Alex Mason and Frank Woods, two of the protagonists from Black Ops, while in 2025, the player assumes control of Mason's son, David.",
  9.3,
  new Date(2012, 10, 12),
  "Treyarch",
  "Activision",
  ["Shooter"]);

  const game36 = await games.addGame("Call of Duty Ghosts",
  "Call of Duty: Ghosts is set in a near future that follows the nuclear destruction of the Middle East. The oil-producing nations of South America form the \"Federation of the Americas\" in response to the ensuing global economic crisis and quickly grow into a global superpower, swiftly invading and conquering Central America, the Caribbean, and Mexico.",
  8.8,
  new Date(2013, 10, 5),
  "Infinity Ward",
  "Activision",
  ["Shooter"]);

  const game37 = await games.addGame("Hatsune Miku Project DIVA X",
  "The core gameplay is of a similar play style to Hatsune Miku: Project DIVA F, removing the double star notes and link stars introduced in Hatsune Miku: Project DIVA F 2nd.",
  8.6,
  new Date(2016, 7, 30),
  "Sega",
  "Sega",
  ["Music"]);

  const game38 = await games.addGame("Hatsune Miku Project DIVA 2nd",
  "The game primarily uses the same gameplay mechanics from the original game albeit with several changes. Most notable of which is that the game now uses the D-pad (arrow buttons) and a\"hold and release\" function for the face buttons in addition to the normal gameplay",
  8.7,
  new Date(2010, 6, 29),
  "Sega",
  "Sega",
  ["Music"]);

  const game39 = await games.addGame("Hatsune Miku Project DIVA F 2nd",
  "The game is set to have a similar play style to its predecessor, Hatsune Miku: Project DIVA F, whilst featuring new songs, returning songs from previous games, and character modules.",
  8.9,
  new Date(2014, 10, 18),
  "Sega",
  "Sega",
  ["Music"]);

  const game42 = await games.addGame("Marvel's Spider-Man",
  "This isn��t the Spider-Man you��ve met or ever seen before. This is an experienced Peter Parker who��s more masterful at fighting big crime in New York City.",
  0.0,
  new Date(2018, 8, 7),
  "Insomniac Games",
  "Sony Interactive Entertainment",
  ["Action"]);

  const game43 = await games.addGame("Red Dead Redemption 2",
  "The game centers on Arthur Morgan, an outlaw and a member of the Van der Linde gang in 1899, in the waning years of the American Old West and extinction of the age of outlaws and gunslingers.",
  0.0,
  new Date(2018, 9, 26),
  "Rockstar Studios",
  "RockStar Games",
  ["Action"]);

  const game44 = await games.addGame("Spyro Reignited Trilogy",
  "The original roast master is back! Same sick burns, same smoldering attitude, now all scaled up in stunning HD. Spyro is bringing the heat like never before in the Spyro Reignited Trilogy game collection.",
  0.0,
  new Date(2018, 8, 21),
  "Toys for Bob",
  "Activision",
  ["Action"]);

  const game45 = await games.addGame("Dark Souls Remastered",
  "Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps. Dark Souls Remastered includes the main game plus the Artorias of the Abyss DLC.",
  0.0,
  new Date(2018, 4, 25),
  "Bandai Namco Games",
  "Bandai Namco Games",
  ["Action"]);

  const game46 = await games.addGame("Call of Duty Black Ops 4",
  "Call of Duty Black Ops 4 (stylized as Call of Duty: Black Ops IIII) is an upcoming first-person shooter video game developed by Treyarch and published by Activision.",
  0.0,
  new Date(2018, 9, 12),
  "Treyarch",
  "Activision",
  ["Shooter"]);

  const game47 = await games.addGame("Detroit Become Human",
  "Detroit: Become Human is an action-adventure game played from a third-person view, which is subject to a set and controllable perspective.",
  0.0,
  new Date(2018, 4, 25),
  "Quantic Dream",
  "Sony Interactive Entertainment",
  ["Action"]);


  await db.serverConfig.close();
};

main();                                  
