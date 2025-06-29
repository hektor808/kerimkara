document.addEventListener('DOMContentLoaded', function() {

    // --- MERKEZİ VERİ YÖNETİMİ (SINGLE SOURCE OF TRUTH) ---
    // Tüm lig ve turnuva verileri, yönetimi kolaylaştırmak ve kod tekrarını önlemek için
    // tek bir ana nesne altında birleştirildi.
    const leagueData = {
        seasons: {
            '1': {
                teams: [
                    { id: 1, name: 'Çankırı İl Özel İdaresi', captain: 'Leroy Sane', players: [], budget:0, logo: 'https://tmssl.akamaized.net//images/wappen/head/69673.png?lm=1541550694' },
                    { id: 2, name: 'AOÇ Fenerkusen 23', captain: 'Xabi Alonso', players: [], budget: 0, logo: 'img/fenerkusen.png' },
                    { id: 3, name: 'Sokan Buruk FC', captain: 'Emre Akbaba', players: [], budget: 0, logo:'img/sokan.png' },
                    { id: 4, name: 'Seçkinler FC', captain: 'Guti Hernandez', players: [], budget: 0, logo:'img/seckin.png' },
                    { id: 5, name: 'Samsun SF', captain: 'Elkeson', players: [], budget: 0, logo: 'https://upload.wikimedia.org/wikipedia/tr/d/d0/Samsunspor_Kul%C3%BCb%C3%BC_Logosu.png' },
                ],
                fixtures: [
                   { week: 1, homeTeamId: 3, awayTeamId: 4, homeScore: 11, awayScore: 3, status: 'Oynandı'},
                   { week: 1, homeTeamId: 1, awayTeamId: 2, homeScore: 3, awayScore: 2, status: 'Oynandı'},
                   { week: 2, homeTeamId: 5, awayTeamId: 2, homeScore: 6, awayScore: 17, status: 'Oynandı'},
                   { week: 2, homeTeamId: 4, awayTeamId: 1, homeScore: 0, awayScore: 16, status: 'Oynandı'},
                   { week: 3, homeTeamId: 3, awayTeamId: 5, homeScore: 27, awayScore: 3, status: 'Oynandı'},
                   { week: 3, homeTeamId: 2, awayTeamId: 4, homeScore: 8, awayScore: 1, status: 'Oynandı'},
                   { week: 4, homeTeamId: 3, awayTeamId: 1, homeScore: 4, awayScore: 8, status: 'Oynandı'},
                   { week: 4, homeTeamId: 5, awayTeamId: 4, homeScore: 5, awayScore: 6, status: 'Oynandı'},
                   { week: 5, homeTeamId: 2, awayTeamId: 3, homeScore: 3, awayScore: 7, status: 'Oynandı'},
                   { week: 5, homeTeamId: 1, awayTeamId: 5, homeScore: 21, awayScore: 0, status: 'Oynandı'},
                   { week: 6, homeTeamId: 2, awayTeamId: 1, homeScore: 3, awayScore: 4, status: 'Oynandı'},
                   { week: 6, homeTeamId: 4, awayTeamId: 3, homeScore: 5, awayScore: 14, status: 'Oynandı'},
                   { week: 7, homeTeamId: 2, awayTeamId: 5, homeScore: 10, awayScore: 1, status: 'Oynandı'},
                   { week: 7, homeTeamId: 1, awayTeamId: 4, homeScore: 6, awayScore: 2, status: 'Oynandı'},
                   { week: 8, homeTeamId: 5, awayTeamId: 3, homeScore: 0, awayScore: 2, status: 'Oynandı'},
                   { week: 8, homeTeamId: 4, awayTeamId: 2, homeScore: 7, awayScore: 5, status: 'Oynandı'},
                   { week: 9, homeTeamId: 1, awayTeamId: 3, homeScore: 4, awayScore: 2, status: 'Oynandı'},
                   { week: 9, homeTeamId: 4, awayTeamId: 5, homeScore: 9, awayScore: 5, status: 'Oynandı'},
                   { week: 10, homeTeamId: 5, awayTeamId: 1, homeScore: 0, awayScore: 6, status: 'Oynandı'},
                   { week: 10, homeTeamId: 3, awayTeamId: 2, homeScore: 8, awayScore: 4, status: 'Oynandı'},
                ],
                playerStats: [
                    { id: 1, name: 'Beltran', teamId: 3, goals: 31, assists: 17, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 2, name: 'Waffle', teamId: 1, goals: 27, assists: 10, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 3, name: 'Tuna', teamId: 1, goals: 23, assists: 21, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 4, name: 'HtcaNN', teamId: 2, goals: 19, assists: 4, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 5, name: 'Dewonie', teamId: 3, goals: 18, assists: 15, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 6, name: 'Asta', teamId: 1, goals: 15, assists: 18, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 7, name: 'Quantum', teamId: 5, goals: 14, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 8, name: 'Erdem', teamId: 3, goals: 13, assists: 11, cleanSheets: 1, yellowCards: 0, redCards: 0 },
                    { id: 9, name: 'Waldy', teamId: 2, goals: 13, assists: 9, cleanSheets: 2, yellowCards: 0, redCards: 0 },
                    { id: 10, name: 'Guti', teamId: 1, goals: 12, assists: 5, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 11, name: 'Mutifan', teamId: 4, goals: 9, assists: 2, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 12, name: 'Jeremy Doku', teamId: 4, goals: 6, assists: 2, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 13, name: 'Lindström', teamId: 4, goals: 5, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 14, name: 'Mielli', teamId: 3, goals: 5, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 15, name: 'Noton', teamId: 2, goals: 4, assists: 6, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 16, name: 'Ern', teamId: 2, goals: 4, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 17, name: 'Neymar Jurjur', teamId: 3, goals: 4, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 18, name: 'Ataalp', teamId: 5, goals: 4, assists: 2, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 19, name: 'Auron', teamId: 4, goals: 3, assists: 22, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 20, name: 'Elkeson', teamId: 5, goals: 3, assists: 1, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 21, name: 'Butto', teamId: 1, goals: 3, assists: 0, cleanSheets: 3, yellowCards: 0, redCards: 0 },
                    { id: 22, name: 'James Maddison', teamId: 4, goals: 3, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 23, name: 'Dodo', teamId: 3, goals: 2, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 24, name: 'Firikinuks', teamId: 1, goals: 1, assists: 1, cleanSheets: 6, yellowCards: 0, redCards: 0 },
                    { id: 25, name: 'Gepard', teamId: 2, goals: 0, assists: 0, cleanSheets: 1, yellowCards: 0, redCards: 0 },
                    { id: 26, name: 'Bahamonde', teamId: 5, goals: 0, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 27, name: 'AraZZ', teamId: 1, goals: 0, assists: 2, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 28, name: 'Bist100fakiri', teamId: 1, goals: 0, assists: 1, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 29, name: 'Al-Musrati', teamId: 5, goals: 0, assists: 1, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 30, name: 'Sergio Ramos', teamId: 2, goals: 0, assists: 1, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                ]
            },
            '2': {
                teams: [
                    { id: 1, name: 'Çankırı İl Özel İdaresi', captain: 'Leroy Sane', players: [], budget:0, logo: 'https://tmssl.akamaized.net//images/wappen/head/69673.png?lm=1541550694' },
                    { id: 2, name: 'AOÇ Fenerkusen 23', captain: 'Xabi Alonso', players: [], budget: 0, logo: 'img/fenerkusen.png' },
                    { id: 3, name: 'Panathinaikos', captain: 'Raphinha', players: [], budget: 0, logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Panathinaikos.svg/2048px-Panathinaikos.svg.png' },
                    { id: 4, name: 'Seçkinler FC', captain: 'Guti Hernandez', players: [], budget: 0, logo:'img/seckin.png' },
                    { id: 5, name: 'Samsun SF', captain: 'Elkeson', players: [], budget: 0, logo: 'https://upload.wikimedia.org/wikipedia/tr/d/d0/Samsunspor_Kul%C3%BCb%C3%BC_Logosu.png' },
                    { id: 6, name: 'Nankatsu SC', captain: 'Mykhailo Mudryk', players: [], budget: 0, logo: 'img/nankatsu.png' },
                    { id: 7, name: 'FC Barcelona', captain: 'Andres Iniesta', players: [], budget: 0, logo: 'https://upload.wikimedia.org/wikipedia/tr/4/47/FC_Barcelona.png' },
                ],
                fixtures: [
                    { week: 1, homeTeamId: 1, awayTeamId: 3, homeScore: 6, awayScore: 3, status: 'Oynandı'},
                    { week: 1, homeTeamId: 4, awayTeamId: 2, homeScore: 3, awayScore: 19, status: 'Oynandı'},
                    { week: 1, homeTeamId: 7, awayTeamId: 5, homeScore: 15, awayScore: 7, status: 'Oynandı'},
                    { week: 2, homeTeamId: 2, awayTeamId: 6, homeScore: 5, awayScore: 5, status: 'Oynandı'},
                    { week: 2, homeTeamId: 5, awayTeamId: 1, homeScore: 4, awayScore: 16, status: 'Oynandı'},
                    { week: 2, homeTeamId: 7, awayTeamId: 4, homeScore: 3, awayScore: 0, status: 'Oynandı'},
                    { week: 3, homeTeamId: 3, awayTeamId: 5, homeScore: 42, awayScore: 1, status: 'Oynandı'},
                    { week: 3, homeTeamId: 6, awayTeamId: 7, homeScore: 10, awayScore: 4, status: 'Oynandı'},
                    { week: 3, homeTeamId: 1, awayTeamId: 4, homeScore: 7, awayScore: 0, status: 'Oynandı'},
                    { week: 4, homeTeamId: 7, awayTeamId: 2, homeScore: 1, awayScore: 11, status: 'Oynandı'},
                    { week: 4, homeTeamId: 4, awayTeamId: 3, homeScore: 2, awayScore: 13, status: 'Oynandı'},
                    { week: 4, homeTeamId: 1, awayTeamId: 6, homeScore: 8, awayScore: 0, status: 'Oynandı'},
                    { week: 5, homeTeamId: 5, awayTeamId: 4, homeScore: 9, awayScore: 2, status: 'Oynandı'},
                    { week: 5, homeTeamId: 2, awayTeamId: 1, homeScore: 3, awayScore: 9, status: 'Oynandı'},
                    { week: 5, homeTeamId: 3, awayTeamId: 6, homeScore: 1, awayScore: 9, status: 'Oynandı'},
                    { week: 6, homeTeamId: 1, awayTeamId: 7, homeScore: 16, awayScore: 2, status: 'Oynandı'},
                    { week: 6, homeTeamId: 6, awayTeamId: 5, homeScore: 0, awayScore: 13, status: 'Oynandı'},
                    { week: 6, homeTeamId: 3, awayTeamId: 2, homeScore: 7, awayScore: 19, status: 'Oynandı'},
                    { week: 7, homeTeamId: 4, awayTeamId: 6, homeScore: 8, awayScore: 5, status: 'Oynandı'},
                    { week: 7, homeTeamId: 7, awayTeamId: 3, homeScore: 41, awayScore: 6, status: 'Oynandı'},
                    { week: 7, homeTeamId: 5, awayTeamId: 2, homeScore: 4, awayScore: 5, status: 'Oynandı'},
                    { week: 8, homeTeamId: 3, awayTeamId: 1, homeScore: 4, awayScore: 6, status: 'Oynandı'},
                    { week: 8, homeTeamId: 2, awayTeamId: 4, homeScore: 10, awayScore: 5, status: 'Oynandı'},
                    { week: 8, homeTeamId: 5, awayTeamId: 7, homeScore: 3, awayScore: 11, status: 'Oynandı'},
                    { week: 9, homeTeamId: 6, awayTeamId: 2, homeScore: 2, awayScore: 13, status: 'Oynandı'},
                    { week: 9, homeTeamId: 1, awayTeamId: 5, homeScore: 4, awayScore: 1, status: 'Oynandı'},
                    { week: 9, homeTeamId: 4, awayTeamId: 7, homeScore: 11, awayScore: 7, status: 'Oynandı'},
                    { week: 10, homeTeamId: 5, awayTeamId: 3, homeScore: 3, awayScore: 0, status: 'Oynandı'},
                    { week: 10, homeTeamId: 7, awayTeamId: 6, homeScore: 2, awayScore: 6, status: 'Oynandı'},
                    { week: 10, homeTeamId: 4, awayTeamId: 1, homeScore: 2, awayScore: 15, status: 'Oynandı'},
                    { week: 11, homeTeamId: 2, awayTeamId: 7, homeScore: 70, awayScore: 1, status: 'Oynandı'},
                    { week: 11, homeTeamId: 6, awayTeamId: 1, homeScore: 0, awayScore: 3, status: 'Oynandı'},
                    { week: 12, homeTeamId: 4, awayTeamId: 5, homeScore: 1, awayScore: 3, status: 'Oynandı'},
                    { week: 12, homeTeamId: 1, awayTeamId: 2, homeScore: 3, awayScore: 0, status: 'Oynandı'},
                    { week: 12, homeTeamId: 6, awayTeamId: 3, homeScore: 3, awayScore: 0, status: 'Oynandı'}
                ],
                playerStats: [
                    { id: 1, name: 'Beltran', teamId: 3, goals: 38, assists: 13, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 2, name: 'Waldy', teamId: 2, goals: 57, assists: 24, cleanSheets: 1, yellowCards: 0, redCards: 0},
                    { id: 3, name: 'Ataalp', teamId: 7, goals: 40, assists: 24, cleanSheets: 1, yellowCards: 0, redCards: 0},
                    { id: 4, name: 'Auron', teamId: 4, goals: 34, assists: 8, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 5, name: 'Tuna', teamId: 1, goals: 24, assists: 22, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 6, name: 'Younes Belhanda', teamId: 7, goals: 24, assists: 10, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 7, name: 'Mielli', teamId: 1, goals: 23, assists: 11, cleanSheets: 2, yellowCards: 0, redCards: 0},
                    { id: 8, name: 'Onye', teamId: 3, goals: 16, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 9, name: 'Chénrey', teamId: 3, goals: 16, assists: 7, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 10, name: 'Noton', teamId: 2, goals: 15, assists: 4, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 11, name: 'Asta', teamId: 1, goals: 15, assists: 16, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 12, name: 'Butto', teamId: 3, goals: 14, assists: 15, cleanSheets: 1, yellowCards: 0, redCards: 0},
                    { id: 13, name: 'Waffle', teamId: 5, goals: 13, assists: 4, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 14, name: 'Elkeson', teamId: 3, goals: 9, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 15, name: 'Westia', teamId: 6, goals: 9, assists: 4, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 16, name: 'Ern', teamId: 2, goals: 9, assists: 51, cleanSheets: 2, yellowCards: 0, redCards: 0},
                    { id: 17, name: 'Tolgamer', teamId: 5, goals: 8, assists: 8, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 18, name: 'Erdem', teamId: 2, goals: 7, assists: 11, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 19, name: 'Jamie Vardy', teamId: 7, goals: 4, assists: 6, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 20, name: 'Taşkafa', teamId: 7, goals: 4, assists: 2, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 21, name: 'Guti Hernandez', teamId: 4, goals: 3, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 22, name: 'Dodo', teamId: 3, goals: 3, assists: 6, cleanSheets: 1, yellowCards: 0, redCards: 0},
                    { id: 23, name: 'Che', teamId: 3, goals: 3, assists: 2, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 24, name: 'Firikinuks', teamId: 1, goals: 3, assists: 0, cleanSheets: 2, yellowCards: 0, redCards: 0},
                    { id: 25, name: 'Motifann', teamId: 4, goals: 3, assists: 7, cleanSheets: 1, yellowCards: 0, redCards: 0},
                    { id: 26, name: 'Espi', teamId: 3, goals: 2, assists: 2, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 27, name: 'Neymar Jurjur', teamId: 3, goals: 2, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 28, name: 'Vyxlora', teamId: 3, goals: 2, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 29, name: 'Phonex', teamId: 4, goals: 2, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 30, name: 'Feeder', teamId: 4, goals: 2, assists: 3, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 31, name: 'Gepard', teamId: 5, goals: 1, assists: 0, cleanSheets: 4, yellowCards: 0, redCards: 0},
                    { id: 32, name: 'Car', teamId: 5, goals: 1, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 33, name: 'Yuemt', teamId: 5, goals: 1, assists: 3, cleanSheets: 2, yellowCards: 0, redCards: 0},
                    { id: 34, name: 'Jaguar', teamId: 2, goals: 21, assists: 15, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 35, name: 'Egehenry', teamId: 6, goals: 0, assists: 6, cleanSheets: 1, yellowCards: 0, redCards: 0},
                    { id: 36, name: 'Hektor', teamId: 6, goals: 0, assists: 4, cleanSheets: 1, yellowCards: 0, redCards: 0},
                    { id: 37, name: 'Kanuni Süleyman', teamId: 3, goals: 0, assists: 2, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 38, name: 'HtcaNN', teamId: 3, goals: 16, assists: 15, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 39, name: 'Shuzky', teamId: 2, goals: 20, assists: 8, cleanSheets: 0, yellowCards: 0, redCards: 0}
                ]
            },
            '3': {
                teams: [
                    { id: 1, name: 'Galatasaray', captain: 'Beltran', players: ['Dodo','Erdem','HtcaNN'], budget:-21, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Galatasaray_AS_logo_2025.svg/697px-Galatasaray_AS_logo_2025.svg.png' },
                    { id: 2, name: 'Fenerbahçe', captain: 'Waffle', players: ['Saras','Sava'], budget: 29, logo: 'https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png' },
                    { id: 3, name: 'Beşiktaş', captain: 'Firikinuks', players: ['Arazz','Asta','Tuna'], budget: 39, logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/BesiktasJK-Logo.svg/782px-BesiktasJK-Logo.svg.png' },
                    { id: 4, name: 'Trabzonspor', captain: 'Bahamonde', players: ['BKL1','Vardy','GABO','Algan','Tolgacion'], budget: 39, logo:'https://upload.wikimedia.org/wikipedia/tr/a/ab/TrabzonsporAmblemi.png' },
                    { id: 5, name: 'İstanbul Başakşehir', captain: 'Tolgamer', players: ['Shuzky','Elkeson','Miella','German','Tolgamer'], budget: 39, logo: 'https://upload.wikimedia.org/wikipedia/tr/c/cd/%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_FK.png' },
                    { id: 6, name: 'Bursaspor', captain: 'Yatabaré', players: ['Blair','Butto','Ataalp','Henrizzy'], budget:288, logo: 'https://upload.wikimedia.org/wikipedia/tr/5/5c/Bursaspor-amblem.png' }
                ],
                fixtures: [
                    { week: 1, homeTeamId: 2, awayTeamId: 1, homeScore: null, awayScore: null, status: 'Oynanmadı', date: '30.06.2025-01.07.2025' },
                    { week: 1, homeTeamId: 3, awayTeamId: 4, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: '30.06.2025-01.07.2025' },
                    { week: 1, homeTeamId: 6, awayTeamId: 5, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: '30.06.2025-01.07.2025' },
                    { week: 2, homeTeamId: 1, awayTeamId: 5, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 2, homeTeamId: 4, awayTeamId: 6, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 2, homeTeamId: 2, awayTeamId: 3, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 3, homeTeamId: 6, awayTeamId: 2, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 3, homeTeamId: 3, awayTeamId: 1, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: 'Belirsiz' },
                    { week: 3, homeTeamId: 5, awayTeamId: 4, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: 'Belirsiz' },
                    { week: 4, homeTeamId: 3, awayTeamId: 6, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 4, homeTeamId: 1, awayTeamId: 4, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 4, homeTeamId: 2, awayTeamId: 5, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 5, homeTeamId: 4, awayTeamId: 2, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 5, homeTeamId: 5, awayTeamId: 3, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: 'Belirsiz' },
                    { week: 5, homeTeamId: 6, awayTeamId: 1, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: 'Belirsiz' },
                    { week: 6, homeTeamId: 5, awayTeamId: 6, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 6, homeTeamId: 4, awayTeamId: 3, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 6, homeTeamId: 1, awayTeamId: 2, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 7, homeTeamId: 5, awayTeamId: 1, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 7, homeTeamId: 6, awayTeamId: 4, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: 'Belirsiz' },
                    { week: 7, homeTeamId: 3, awayTeamId: 2, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: 'Belirsiz' },
                    { week: 8, homeTeamId: 2, awayTeamId: 6, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 8, homeTeamId: 1, awayTeamId: 3, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 8, homeTeamId: 4, awayTeamId: 5, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 9, homeTeamId: 5, awayTeamId: 2, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 9, homeTeamId: 6, awayTeamId: 3, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: 'Belirsiz' },
                    { week: 9, homeTeamId: 4, awayTeamId: 1, homeScore: null, awayScore: null, status: 'Oynanmadı' ,date: 'Belirsiz' },
                    { week: 10, homeTeamId: 1, awayTeamId: 6, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 10, homeTeamId: 3, awayTeamId: 5, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                    { week: 10, homeTeamId: 2, awayTeamId: 4, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
                ],
                playerStats: [
                    { id: 1, name: 'Beltran', teamId: 1, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0,},
                    { id: 2, name: 'Firikinuks', teamId: 3, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0,},
                    { id: 3, name: 'German', teamId: 5, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 4, name: 'Dodo', teamId: 1, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 5, name: 'Bahamonde', teamId: 4, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0 },
                    { id: 6, name: 'Waffle', teamId: 2, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 1, suspension: {reason: "Sanal mafyalarla ilişki kurmak", bannedWeek: 6}},
                    { id: 7, name: 'Butto', teamId: 6, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0},
                    { id: 8, name: 'Erdem', teamId: 1, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0 }
                ]
            }
        },
        eurocups: {
            '1': { // Corresponds to "EuroCup 24" in the dropdown
                teams: [
                    { id: 1, name: 'Almanya', captain: 'Anastasios Bakasetas', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e9-1f1ea.svg' },
                    { id: 2, name: 'Fransa', captain: 'Ryan Kent', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1eb-1f1f7.svg' },
                    { id: 3, name: 'İspanya', captain: 'Carlos', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1ea-1f1f8.png' },
                    { id: 4, name: 'Türkiye', captain: 'John', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f9-1f1f7.svg' },
                ],
                fixtures: [
                    { stageId: 1, week: 1, homeTeamId: 1, awayTeamId: 4, homeScore: 4, awayScore: 1, status: 'Oynandı' },
                    { stageId: 1, week: 1, homeTeamId: 2, awayTeamId: 3, homeScore: 3, awayScore: 7, status: 'Oynandı' },
                    { stageId: 2, week: 2, homeTeamId: 2, awayTeamId: 1, homeScore: 0, awayScore: 7, status: 'Oynandı' },
                    { stageId: 3, week: 2, homeTeamId: 4, awayTeamId: 3, homeScore: 9, awayScore: 1, status: 'Oynandı' }
                ]
            },
            '2': { // Corresponds to "EuroCup 25" in the dropdown
                teams: [
                    { id: 1, name: 'San Marino', captain: 'Anastasios Bakasetas', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f8-1f1f2.svg' },
                    { id: 2, name: 'Kazakistan', captain: 'Ryan Kent', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f0-1f1ff.svg' },
                    { id: 3, name: 'İspanya', captain: 'Carlos', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1ea-1f1f8.png' },
                    { id: 4, name: 'Malta', captain: 'John', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f2-1f1f9.svg' },
                ],
                fixtures: [
                    { stageId: 1, week: 1, homeTeamId: 2, awayTeamId: 3, homeScore: 7, awayScore: 5, status: 'Oynandı', date: '27.06.2025 15:00' },
                    { stageId: 1, week: 1, homeTeamId: 1, awayTeamId: 4, homeScore: 17, awayScore: 1, status: 'Oynandı' },
                    { stageId: 2, week: 2, homeTeamId: 1, awayTeamId: 2, homeScore: 1, awayScore: 2, status: 'Oynandı', date: '29.06.2025' },
                    { stageId: 3, week: 2, homeTeamId: 4, awayTeamId: 3, homeScore: 13, awayScore: 1, status: 'Oynandı', date: '29.06.2025' }
                ]
            }
        }
    };

    // --- YARDIMCI FONKSİYONLAR (HELPERS) ---

    /**
     * Belirtilen lig sezonuna ait verileri merkezi veri kaynağından çeker.
     * @param {string} seasonId - Sezon ID'si (örn: '1', '2', '3').
     * @returns {{teams: Array, fixtures: Array, playerStats: Array}}
     */
    function getSeasonData(seasonId) {
        return leagueData.seasons[seasonId] || { teams: [], fixtures: [], playerStats: [] };
    }

    /**
     * Belirtilen Eurocup sezonuna ait verileri çeker.
     * @param {string} cupId - Eurocup ID'si (örn: '1' for 24, '2' for 25).
     * @returns {{teams: Array, fixtures: Array}}
     */
    function getEurocupData(cupId) {
        return leagueData.eurocups[cupId] || { teams: [], fixtures: [] };
    }


    // --- PUAN DURUMU HESAPLAMA VE GÖSTERME ---
    function calculateStandings(teams, fixtures) {
        let standings = teams.map(team => ({
            id: team.id,
            name: team.name,
            logo: team.logo,
            played: 0,
            win: 0,
            draw: 0,
            loss: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,
            points: 0,
        }));

        fixtures.filter(f => f.status === 'Oynandı').forEach(fixture => {
            let homeTeam = standings.find(t => t.id === fixture.homeTeamId);
            let awayTeam = standings.find(t => t.id === fixture.awayTeamId);

            if (homeTeam && awayTeam) {
                homeTeam.played++;
                awayTeam.played++;
                homeTeam.goalsFor += fixture.homeScore;
                awayTeam.goalsFor += fixture.awayScore;
                homeTeam.goalsAgainst += fixture.awayScore;
                awayTeam.goalsAgainst += fixture.homeScore;

                if (fixture.homeScore > fixture.awayScore) {
                    homeTeam.win++;
                    awayTeam.loss++;
                    homeTeam.points += 3;
                } else if (fixture.homeScore < fixture.awayScore) {
                    awayTeam.win++;
                    homeTeam.loss++;
                    awayTeam.points += 3;
                } else {
                    homeTeam.draw++;
                    awayTeam.draw++;
                    homeTeam.points += 1;
                    awayTeam.points += 1;
                }
            }
        });

        standings.forEach(team => {
            team.goalDifference = team.goalsFor - team.goalsAgainst;
        });

        return standings.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
            return b.goalsFor - a.goalsFor;
        });
    }

    function displayStandings() {
        const seasonId = document.getElementById('seasonSelectStandings').value;
        const { teams, fixtures } = getSeasonData(seasonId);
        const standings = calculateStandings(teams, fixtures);
        const tableBody = document.getElementById('standings-table-body');
        tableBody.innerHTML = '';

        standings.forEach((team, index) => {
            const row = `
                <tr class="bg-gray-800 border-b border-gray-700 hover:bg-gray-700/50">
                    <td class="px-6 py-4 font-medium whitespace-nowrap ${index < 3 ? 'text-green-400' : ''}">${index + 1}</td>
                    <td class="px-6 py-4 flex items-center gap-3">
                        <img src="${team.logo}" alt="${team.name} logo" class="w-10 h-10 rounded object-contain" />
                        <span class="font-semibold text-white">${team.name}</span>
                    </td>
                    <td class="px-6 py-4 text-center">${team.played}</td>
                    <td class="px-6 py-4 text-center text-green-400">${team.win}</td>
                    <td class="px-6 py-4 text-center text-yellow-400">${team.draw}</td>
                    <td class="px-6 py-4 text-center text-red-400">${team.loss}</td>
                    <td class="px-6 py-4 text-center">${team.goalsFor}</td>
                    <td class="px-6 py-4 text-center">${team.goalsAgainst}</td>
                    <td class="px-6 py-4 text-center">${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}</td>
                    <td class="px-6 py-4 text-center font-bold text-white">${team.points}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // --- FİKSTÜR GÖSTERME ---
    function displayFixtures() {
        const seasonId = document.getElementById('seasonSelectFixtures').value;
        const { teams: teamsData, fixtures: fixturesData } = getSeasonData(seasonId);
        const container = document.getElementById('fixtures-container');
        container.innerHTML = '';

        const groupedByWeek = fixturesData.reduce((acc, fixture) => {
            acc[fixture.week] = acc[fixture.week] || [];
            acc[fixture.week].push(fixture);
            return acc;
        }, {});

        for (const week in groupedByWeek) {
            const weekContainer = document.createElement('div');
            weekContainer.className = 'bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700';
            const weekTitle = document.createElement('h3');
            weekTitle.className = 'text-lg sm:text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2';
            weekTitle.textContent = `${week}. Hafta Maçları`;
            weekContainer.appendChild(weekTitle);

            groupedByWeek[week].forEach(fixture => {
                const homeTeam = teamsData.find(t => t.id === fixture.homeTeamId);
                const awayTeam = teamsData.find(t => t.id === fixture.awayTeamId);
                const fixtureElement = document.createElement('div');
                fixtureElement.className = 'flex items-center justify-between p-2 sm:p-3 rounded-md hover:bg-gray-700/50';

                let scoreDisplay;
                if (fixture.status === 'Oynandı') {
                    scoreDisplay = `
                        <span class="font-bold text-lg sm:text-xl px-2 py-1.5 rounded-md bg-blue-600 text-white">${fixture.homeScore}</span>
                        <span class="font-bold text-gray-400 mx-1 sm:mx-3">-</span>
                        <span class="font-bold text-lg sm:text-xl px-2 py-1.5 rounded-md bg-blue-600 text-white">${fixture.awayScore}</span>
                    `;
                } else {
                    scoreDisplay = `<span class="text-xs sm:text-sm text-gray-400">${fixture.date || 'Belirsiz'}</span>`;
                }

                fixtureElement.innerHTML = `
                    <div class="flex items-center gap-2 sm:gap-3 text-right justify-end w-2/5 sm:w-2/5 min-w-0">
                        <span class="font-semibold text-white truncate sm:inline">${homeTeam.name}</span>
                        <img src="${homeTeam.logo}" alt="${homeTeam.name} logo" class="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                    </div>
                    <div class="w-1/5 sm:w-1/5 text-center flex items-center justify-center min-w-max">
                        ${scoreDisplay}
                    </div>
                    <div class="flex items-center gap-2 sm:gap-3 w-2/5 sm:w-2/5 min-w-0">
                        <img src="${awayTeam.logo}" alt="${awayTeam.name} logo" class="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                        <span class="font-semibold text-white truncate sm:inline">${awayTeam.name}</span>
                    </div>
                `;
                weekContainer.appendChild(fixtureElement);
            });
            container.appendChild(weekContainer);
        }
    }

    // --- KRALLIKLAR VE İSTATİSTİKLER ---
    function displayTopStats() {
        const seasonId = document.getElementById('seasonSelectKings').value;
        const { teams: seasonTeamsData, playerStats: seasonPlayerStats } = getSeasonData(seasonId);

        // Gol Krallığı
        const topScorers = seasonPlayerStats.filter(p => p.goals > 0).sort((a, b) => b.goals - a.goals);
        const scorersContainer = document.getElementById('top-scorers');
        scorersContainer.innerHTML = `
            <h3 class="text-lg font-bold text-center text-yellow-400 mb-4 border-b border-yellow-500 pb-2">Gol Krallığı</h3>
            <ul class="space-y-3">
                ${topScorers.map(p => {
                    const team = seasonTeamsData.find(t => t.id === p.teamId);
                    return `
                    <li class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="${team?.logo || ''}" class="w-6 h-6 object-contain" />
                            <span class="text-white">${p.name}</span>
                        </div>
                        <span class="text-blue-400 font-bold">${p.goals}</span>
                    </li>`;
                }).join('')}
            </ul>`;

        // Asist Krallığı
        const topAssists = seasonPlayerStats.filter(p => p.assists > 0).sort((a, b) => b.assists - a.assists);
        const assistsContainer = document.getElementById('top-assists');
        assistsContainer.innerHTML = `
            <h3 class="text-lg font-bold text-center text-green-400 mb-4 border-b border-green-500 pb-2">Asist Krallığı</h3>
            <ul class="space-y-3">
                ${topAssists.map(p => {
                    const team = seasonTeamsData.find(t => t.id === p.teamId);
                    return `
                    <li class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="${team?.logo || ''}" class="w-6 h-6 object-contain" />
                            <span class="text-white">${p.name}</span>
                        </div>
                        <span class="text-green-400 font-bold">${p.assists}</span>
                    </li>`;
                }).join('')}
            </ul>`;

        // Clean Sheet
        const topKeepers = seasonPlayerStats.filter(p => p.cleanSheets > 0).sort((a, b) => b.cleanSheets - a.cleanSheets);
        const cleanSheetsContainer = document.getElementById('top-cleansheets');
        cleanSheetsContainer.innerHTML = `
            <h3 class="text-lg font-bold text-center text-cyan-400 mb-4 border-b border-cyan-500 pb-2">Clean Sheet</h3>
            <ul class="space-y-3">
                ${topKeepers.map(p => {
                    const team = seasonTeamsData.find(t => t.id === p.teamId);
                    return `
                    <li class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <img src="${team?.logo || ''}" class="w-6 h-6 object-contain" />
                            <span class="text-white">${p.name}</span>
                        </div>
                        <span class="text-cyan-400 font-bold">${p.cleanSheets}</span>
                    </li>`;
                }).join('')}
            </ul>`;
    }

    // --- EUROCUP FİKSTÜRÜ ---
    function displayEurocupFixtures() {
        const cupId = document.getElementById('seasonSelectEurocup').value;
        const { teams: teamsData, fixtures: fixturesData } = getEurocupData(cupId);
        const container = document.getElementById('eurocup-fixtures-container');
        container.innerHTML = '';

        const stageNames = { 1: 'Yarı Final', 3: '3.’lük Maçı', 2: 'Final' };
        const groupedByStage = fixturesData.reduce((acc, fixture) => {
            acc[fixture.stageId] = acc[fixture.stageId] || [];
            acc[fixture.stageId].push(fixture);
            return acc;
        }, {});

        const stagesOrder = [1, 3, 2];

        stagesOrder.forEach(stageId => {
            if (!groupedByStage[stageId]) return;

            const stageContainer = document.createElement('div');
            stageContainer.className = 'bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto mt-6';
            const stageTitle = document.createElement('h3');
            stageTitle.className = 'text-lg sm:text-xl font-bold text-white mb-4 border-b border-blue-600 pb-2';
            stageTitle.textContent = stageNames[stageId] || 'Maçlar';
            stageContainer.appendChild(stageTitle);

            groupedByStage[stageId].forEach(fixture => {
                const homeTeam = teamsData.find(t => t.id === fixture.homeTeamId);
                const awayTeam = teamsData.find(t => t.id === fixture.awayTeamId);
                const fixtureElement = document.createElement('div');
                fixtureElement.className = 'flex items-center justify-between p-2 sm:p-3 rounded-md hover:bg-gray-700/50';

                let scoreDisplay;
                if (fixture.status === 'Oynandı') {
                    scoreDisplay = `
                        <span class="font-bold text-lg sm:text-xl px-2 py-1 rounded-md bg-blue-600 text-white">${fixture.homeScore}</span>
                        <span class="font-bold text-gray-400 mx-3.25">-</span>
                        <span class="font-bold text-lg sm:text-xl px-2 py-1 rounded-md bg-blue-600 text-white">${fixture.awayScore}</span>
                    `;
                } else {
                    scoreDisplay = `<span class="text-xs sm:text-sm text-gray-400">${fixture.date || 'Tarih yok'}</span>`;
                }

                fixtureElement.innerHTML = `
                    <div class="flex items-center gap-2 sm:gap-3 text-right justify-end w-2/5 min-w-0">
                        <span class="font-semibold text-white truncate">${homeTeam ? homeTeam.name : 'Belirlenmedi'}</span>
                        <img src="${homeTeam ? homeTeam.logo : 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f3f3.svg'}" class="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                    </div>
                    <div class="w-[24%] text-center flex items-center justify-center">
                        ${scoreDisplay}
                    </div>
                    <div class="flex items-center gap-2 sm:gap-3 w-2/5 min-w-0">
                        <img src="${awayTeam ? awayTeam.logo : 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f3f3.svg'}" class="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                        <span class="font-semibold text-white truncate">${awayTeam ? awayTeam.name : 'Belirlenmedi'}</span>
                    </div>
                `;
                stageContainer.appendChild(fixtureElement);
            });
            container.appendChild(stageContainer);
        });
    }

    // --- TAKIM, BÜTÇE VE CEZA GÖSTERİMİ (Genellikle en güncel sezonu gösterir) ---
    function displayTeams() {
        const { teams: teamsData } = getSeasonData('3'); // Her zaman en güncel (Sezon 3) takımları gösterir
        const container = document.getElementById('teams-container');
        container.innerHTML = '';
        teamsData.forEach(team => {
            const card = `
                <div class="bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-blue-500/20 transform hover:-translate-y-1">
                    <div class="flex justify-center mb-4">
                        <img src="${team.logo}" alt="${team.name} logo" class="w-16 h-16 object-contain" />
                    </div>
                    <h3 class="text-xl font-bold text-white">${team.name}</h3>
                    <p class="text-gray-400 text-sm mt-1">Kaptan: ${team.captain}</p>
                    <div class="mt-4 pt-4 border-t border-gray-700">
                        <h4 class="text-sm font-semibold text-gray-300 mb-2">Oyuncular</h4>
                        <div class="flex flex-wrap justify-center gap-2">
                            ${team.players.map(player => `<span class="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">${player}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    function displayBudgets() {
        const { teams: teamsData } = getSeasonData('3'); // Her zaman en güncel (Sezon 3) bütçeleri gösterir
        const container = document.getElementById('budget-container');
        container.innerHTML = '';
        teamsData.forEach(team => {
            const card = document.createElement('div');
            card.className = 'bg-gray-800 border border-gray-700 rounded-xl p-5 flex items-center justify-between shadow hover:shadow-lg transition';
            card.innerHTML = `
                <div class="flex items-center gap-4">
                    <img src="${team.logo}" alt="${team.name} logo" class="w-12 h-12 rounded object-contain" />
                    <div>
                        <h3 class="text-white font-bold text-lg">${team.name}</h3>
                        <p class="text-sm text-gray-400">Kaptan: ${team.captain}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-400">Bütçe</p>
                    <p class="text-2xl font-bold text-green-400">${team.budget}M€</p>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function displaySuspendedPlayers() {
        const { teams: teamsData, playerStats } = getSeasonData('3'); // Cezalar sadece güncel sezon için gösterilir
        const container = document.getElementById('suspended-players-container');
        container.innerHTML = '';

        const suspendedPlayers = playerStats.filter(player => player.suspension);
        if (suspendedPlayers.length === 0) {
            container.innerHTML = '<p class="text-white text-center">Cezalı oyuncu yok.</p>';
            return;
        }

        suspendedPlayers.forEach(player => {
            const team = teamsData.find(t => t.id === player.teamId);
            const card = document.createElement('div');
            card.className = 'flex flex-col bg-red-900/30 border border-red-700 p-4 rounded-xl mb-3 shadow max-w-2xl mx-auto';
            card.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-4">
                        <img src="${team.logo}" alt="${team.name}" class="w-10 h-10 object-contain rounded" />
                        <div>
                            <p class="text-white font-bold">${player.name} <span class="text-gray-400">(${team.name})</span></p>
                            <p class="text-white text-lg">${player.redCards > 0 ? '🟥 ' + player.redCards : '🟨 ' + player.yellowCards}</p>
                        </div>
                    </div>
                </div>
                <div class="text-sm text-white mt-1 px-1">
                    📝 Ceza Nedeni: <span class="font-semibold">${player.suspension.reason}</span><br />
                    <span class="italic text-gray-400 text-xs">${player.suspension.bannedWeek}. hafta maçını kaçıracak.</span>
                </div>
            `;
            container.appendChild(card);
        });
    }


    // --- NAVİGASYON İŞLEVSELLİĞİ ---
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === id);
        });

        const selector = `.nav-link[href="#${id}"]`;
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(selector)?.classList.add('active');

        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }

    function handleLinkClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        showSection(targetId);
        window.history.pushState(null, '', `#${targetId}`);
    }

    navLinks.forEach(link => link.addEventListener('click', handleLinkClick));
    mobileNavLinks.forEach(link => link.addEventListener('click', handleLinkClick));

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1) || 'anasayfa';
        showSection(hash);
    });

    // --- UYGULAMAYI BAŞLATMA ---
    function initializeApp() {
        // Event Listeners
        document.getElementById('seasonSelectStandings').addEventListener('change', displayStandings);
        document.getElementById('seasonSelectFixtures').addEventListener('change', displayFixtures);
        document.getElementById('seasonSelectKings').addEventListener('change', displayTopStats);
        document.getElementById('seasonSelectEurocup').addEventListener('change', displayEurocupFixtures);

        // Initial Display Calls
        displayStandings();
        displayFixtures();
        displayTeams();
        displayTopStats();
        displayEurocupFixtures();
        displayBudgets();
        displaySuspendedPlayers();

        // Initial section based on URL hash
        const initialHash = window.location.hash.substring(1) || 'anasayfa';
        showSection(initialHash);

        // Footer year
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }

    initializeApp();

});
