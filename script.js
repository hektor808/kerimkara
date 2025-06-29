document.addEventListener('DOMContentLoaded', function() {

    // --- MERKEZİ VERİ ALANI ---
    // (Veri alanında bir değişiklik yok, olduğu gibi kalabilir)
    const leagueData = {
        '1': {
            teams: [
                { id: 1, name: 'Çankırı İl Özel İdaresi', captain: 'Leroy Sane', logo: 'https://tmssl.akamaized.net//images/wappen/head/69673.png?lm=1541550694' },
                { id: 2, name: 'AOÇ Fenerkusen 23', captain: 'Xabi Alonso', logo: 'img/fenerkusen.png' },
                { id: 3, name: 'Sokan Buruk FC', captain: 'Emre Akbaba', logo:'img/sokan.png' },
                { id: 4, name: 'Seçkinler FC', captain: 'Guti Hernandez', logo:'img/seckin.png' },
                { id: 5, name: 'Samsun SF', captain: 'Elkeson', logo: 'https://upload.wikimedia.org/wikipedia/tr/d/d0/Samsunspor_Kul%C3%BCb%C3%BC_Logosu.png' },
            ],
            fixtures: [
               { week: 1, homeTeamId: 3, awayTeamId: 4, homeScore: 11, awayScore: 3, status: 'Oynandı'}, // c: 1, f: 2, sok: 3, sec: 4, sam: 5
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
                { id: 1, name: 'Beltran', teamId: 3, goals: 31, assists: 17, cleanSheets: 0 },
                { id: 2, name: 'Waffle', teamId: 1, goals: 27, assists: 10, cleanSheets: 0 },
                { id: 3, name: 'Tuna', teamId: 1, goals: 23, assists: 21, cleanSheets: 0 },
                { id: 4, name: 'HtcaNN', teamId: 2, goals: 19, assists: 4, cleanSheets: 0 },
                { id: 5, name: 'Dewonie', teamId: 3, goals: 18, assists: 15, cleanSheets: 0 },
                { id: 6, name: 'Asta', teamId: 1, goals: 15, assists: 18, cleanSheets: 0 },
                { id: 7, name: 'Quantum', teamId: 5, goals: 14, assists: 0, cleanSheets: 0 },
                { id: 8, name: 'Erdem', teamId: 3, goals: 13, assists: 11, cleanSheets: 1 },
                { id: 9, name: 'Waldy', teamId: 2, goals: 13, assists: 9, cleanSheets: 2 },
            ]
        },
        '2': {
            teams: [
                { id: 1, name: 'Çankırı İl Özel İdaresi', captain: 'Leroy Sane', logo: 'https://tmssl.akamaized.net//images/wappen/head/69673.png?lm=1541550694' },
                { id: 2, name: 'AOÇ Fenerkusen 23', captain: 'Xabi Alonso', logo: 'img/fenerkusen.png' },
                { id: 3, name: 'Panathinaikos', captain: 'Raphinha', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Panathinaikos.svg/2048px-Panathinaikos.svg.png' },
                { id: 4, name: 'Seçkinler FC', captain: 'Guti Hernandez', logo:'img/seckin.png' },
                { id: 5, name: 'Samsun SF', captain: 'Elkeson', logo: 'https://upload.wikimedia.org/wikipedia/tr/d/d0/Samsunspor_Kul%C3%BCb%C3%BC_Logosu.png' },
                { id: 6, name: 'Nankatsu SC', captain: 'Mykhailo Mudryk', logo: 'img/nankatsu.png' },
                { id: 7, name: 'FC Barcelona', captain: 'Andres Iniesta', logo: 'https://upload.wikimedia.org/wikipedia/tr/4/47/FC_Barcelona.png' },
            ],
            fixtures: [
                { week: 1, homeTeamId: 1, awayTeamId: 3, homeScore: 6, awayScore: 3, status: 'Oynandı'},
                { week: 1, homeTeamId: 4, awayTeamId: 2, homeScore: 3, awayScore: 19, status: 'Oynandı'},
                { week: 1, homeTeamId: 7, awayTeamId: 5, homeScore: 15, awayScore: 7, status: 'Oynandı'},
                { week: 2, homeTeamId: 2, awayTeamId: 6, homeScore: 5, awayScore: 5, status: 'Oynandı'},
                { week: 12, homeTeamId: 6, awayTeamId: 3, homeScore: 3, awayScore: 0, status: 'Oynandı'}
            ],
            playerStats: [
                { id: 1, name: 'Beltran', teamId: 3, goals: 38, assists: 13, cleanSheets: 0 },
                { id: 2, name: 'Waldy', teamId: 2, goals: 57, assists: 24, cleanSheets: 1 },
                { id: 3, name: 'Ataalp', teamId: 7, goals: 40, assists: 24, cleanSheets: 1 },
                { id: 4, name: 'Auron', teamId: 4, goals: 34, assists: 8, cleanSheets: 0 },
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
            ],
            playerStats: [
                { id: 1, name: 'Beltran', teamId: 1, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0,},
                { id: 2, name: 'Firikinuks', teamId: 3, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0,},
                { id: 6, name: 'Waffle', teamId: 2, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 1, suspension: {reason: "Sanal mafyalarla ilişki kurmak", bannedWeek: 6}},
            ]
        }
    };

    const eurocupData = {
        '1': { // EuroCup 24
            teams: [
                { id: 1, name: 'Almanya', captain: 'Anastasios Bakasetas', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e9-1f1ea.svg'},
                { id: 2, name: 'Fransa', captain: 'Ryan Kent', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1eb-1f1f7.svg'},
                { id: 3, name: 'İspanya', captain: 'Carlos', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1ea-1f1f8.png' },
                { id: 4, name: 'Türkiye', captain: 'John', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f9-1f1f7.svg'},
            ],
            fixtures: [
                { stageId: 1, week: 1, homeTeamId: 1, awayTeamId: 4, homeScore: 4, awayScore: 1, status: 'Oynandı' },
                { stageId: 1, week: 1, homeTeamId: 2, awayTeamId: 3, homeScore: 3, awayScore: 7, status: 'Oynandı' },
                { stageId: 2, week: 2, homeTeamId: 1, awayTeamId: 2, homeScore: 7, awayScore: 0, status: 'Oynandı' },
                { stageId: 3, week: 2, homeTeamId: 4, awayTeamId: 3, homeScore: 9, awayScore: 1, status: 'Oynandı' }
            ]
        },
        '2': { // EuroCup 25
            teams: [
                { id: 1, name: 'San Marino', captain: 'Anastasios Bakasetas', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f8-1f1f2.svg'},
                { id: 2, name: 'Kazakistan', captain: 'Ryan Kent', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f0-1f1ff.svg'},
                { id: 3, name: 'İspanya', captain: 'Carlos', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1ea-1f1f8.png' },
                { id: 4, name: 'Malta', captain: 'John', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f2-1f1f9.svg'},
            ],
            fixtures: [
                { stageId: 1, week: 1, homeTeamId: 2, awayTeamId: 3, homeScore: 7, awayScore: 5, status: 'Oynandı',date: '27.06.2025 15:00' },
                { stageId: 1, week: 1, homeTeamId: 1, awayTeamId: 4, homeScore: 17, awayScore: 1, status: 'Oynandı'},
                { stageId: 2, week: 2, homeTeamId: 2, awayTeamId: 1, homeScore: 2, awayScore: 1, status: 'Oynandı', date:'29.06.2025'},
                { stageId: 3, week: 2, homeTeamId: 4, awayTeamId: 3, homeScore: null, awayScore: null, status: 'Oynanmadı', date:'29.06.2025' }
            ]
        }
    };


    // --- YARDIMCI FONKSİYONLAR ---
    // (Bu bölümde değişiklik yok)
    function getLeagueDataForSeason(season) {
        return leagueData[season] || { teams: [], fixtures: [], playerStats: [] };
    }
    
    function getEurocupDataForSeason(season) {
        return eurocupData[season] || { teams: [], fixtures: [] };
    }


    // --- GÖRÜNÜM OLUŞTURMA FONKSİYONLARI ---

    function calculateStandings(teams, fixtures) {
        let standings = teams.map(team => ({
            id: team.id,
            name: team.name,
            logo: team.logo,
            played: 0, win: 0, draw: 0, loss: 0,
            goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0,
        }));

        fixtures.filter(f => f.status === 'Oynandı').forEach(fixture => {
            let homeTeam = standings.find(t => t.id === fixture.homeTeamId);
            let awayTeam = standings.find(t => t.id === fixture.awayTeamId);

            if(homeTeam && awayTeam) {
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
        
        standings.forEach(team => team.goalDifference = team.goalsFor - team.goalsAgainst);

        return standings.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
            return b.goalsFor - a.goalsFor;
        });
    }

    function displayStandings() {
        const tableBody = document.getElementById('standings-table-body');
        // DÜZELTME: Güvenlik kontrolü eklendi. Eğer HTML'de ilgili ID bulunamazsa, fonksiyon hata vermeden durur.
        if (!tableBody) return;

        const season = document.getElementById('seasonSelectStandings').value;
        const { teams, fixtures } = getLeagueDataForSeason(season);
        
        const standings = calculateStandings(teams, fixtures);
        tableBody.innerHTML = ''; 

        if (standings.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="10" class="text-center p-4">Bu sezon için veri bulunamadı.</td></tr>';
            return;
        }

        standings.forEach((team, index) => {
            const row = document.createElement('tr');
            row.className = "bg-gray-800 border-b border-gray-700 hover:bg-gray-700/50";
            row.innerHTML = `
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
            `;
            tableBody.appendChild(row);
        });
    }

    function displayFixtures() {
        const container = document.getElementById('fixtures-container');
        // DÜZELTME: Güvenlik kontrolü eklendi.
        if (!container) return;

        const season = document.getElementById('seasonSelectFixtures').value;
        const { teams, fixtures } = getLeagueDataForSeason(season);
        
        container.innerHTML = '';
        
        const groupedByWeek = fixtures.reduce((acc, fixture) => {
            (acc[fixture.week] = acc[fixture.week] || []).push(fixture);
            return acc;
        }, {});

        for (const week in groupedByWeek) {
            const weekContainer = document.createElement('div');
            weekContainer.className = 'bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700'; 
            weekContainer.innerHTML = `<h3 class="text-lg sm:text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">${week}. Hafta Maçları</h3>`;
            
            groupedByWeek[week].forEach(fixture => {
                const homeTeam = teams.find(t => t.id === fixture.homeTeamId);
                const awayTeam = teams.find(t => t.id === fixture.awayTeamId);
                if (!homeTeam || !awayTeam) return;

                const fixtureElement = document.createElement('div');
                fixtureElement.className = 'flex items-center justify-between p-2 sm:p-3 rounded-md hover:bg-gray-700/50';

                const scoreDisplay = fixture.status === 'Oynandı' ? `
                    <span class="font-bold text-lg sm:text-xl px-2 py-1.5 rounded-md bg-blue-600 text-white">${fixture.homeScore}</span>
                    <span class="font-bold text-gray-400 mx-1 sm:mx-3">-</span>
                    <span class="font-bold text-lg sm:text-xl px-2 py-1.5 rounded-md bg-blue-600 text-white">${fixture.awayScore}</span>
                ` : `<span class="text-xs sm:text-sm text-gray-400">${fixture.date || 'Belirsiz'}</span>`;

                fixtureElement.innerHTML = `
                    <div class="flex items-center gap-2 sm:gap-3 text-right justify-end w-2/5 sm:w-2/5 min-w-0">
                        <span class="font-semibold text-white truncate sm:inline">${homeTeam.name}</span>
                        <img src="${homeTeam.logo}" alt="${homeTeam.name} logo" class="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                    </div>
                    <div class="w-1/5 sm:w-1/5 text-center flex items-center justify-center min-w-max">${scoreDisplay}</div>
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
    
    function displayEurocupFixtures() {
        const container = document.getElementById('eurocup-fixtures-container');
        // DÜZELTME: Güvenlik kontrolü eklendi.
        if (!container) return;

        const season = document.getElementById('seasonSelectEurocup').value;
        const { teams, fixtures } = getEurocupDataForSeason(season);

        container.innerHTML = '';
        
        const stageNames = { 1: 'Yarı Final', 2: 'Final', 3: '3.’lük Maçı' };
        const stagesOrder = [1, 3, 2];

        stagesOrder.forEach(stageId => {
            const stageFixtures = fixtures.filter(f => f.stageId === stageId);
            if (stageFixtures.length === 0) return;

            const stageContainer = document.createElement('div');
            stageContainer.className = 'bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto mt-6';
            stageContainer.innerHTML = `<h3 class="text-lg sm:text-xl font-bold text-white mb-4 border-b border-blue-600 pb-2">${stageNames[stageId]}</h3>`;
            
            stageFixtures.forEach(fixture => {
                const homeTeam = teams.find(t => t.id === fixture.homeTeamId);
                const awayTeam = teams.find(t => t.id === fixture.awayTeamId);
                
                const fixtureElement = document.createElement('div');
                fixtureElement.className = 'flex items-center justify-between p-2 sm:p-3 rounded-md hover:bg-gray-700/50';

                const scoreDisplay = fixture.status === 'Oynandı' ? `
                    <span class="font-bold text-lg sm:text-xl px-2 py-1 rounded-md bg-blue-600 text-white">${fixture.homeScore}</span>
                    <span class="font-bold text-gray-400 mx-3.25">-</span>
                    <span class="font-bold text-lg sm:text-xl px-2 py-1 rounded-md bg-blue-600 text-white">${fixture.awayScore}</span>
                ` : `<span class="text-xs sm:text-sm text-gray-400">${fixture.date || 'Tarih yok'}</span>`;
                
                fixtureElement.innerHTML = `
                    <div class="flex items-center gap-2 sm:gap-3 text-right justify-end w-2/5 min-w-0">
                        <span class="font-semibold text-white truncate">${homeTeam ? homeTeam.name : 'Belirlenmedi'}</span>
                        <img src="${homeTeam ? homeTeam.logo : 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f3f3.svg'}" class="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded" />
                    </div>
                    <div class="w-[24%] text-center flex items-center justify-center">${scoreDisplay}</div>
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

    function displayStatLeaders({ containerId, statType, title, colorClass }) {
        const container = document.getElementById(containerId);
        // DÜZELTME: Güvenlik kontrolü eklendi.
        if (!container) return;
        
        const season = document.getElementById('seasonSelectKings').value;
        const { teams, playerStats } = getLeagueDataForSeason(season);
        
        container.innerHTML = '';
        
        const topPlayers = playerStats
            .filter(p => p[statType] > 0)
            .sort((a, b) => b[statType] - a[statType]);

        const listItems = topPlayers.map(player => {
            const team = teams.find(t => t.id === player.teamId);
            return `
                <li class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <img src="${team?.logo || ''}" class="w-6 h-6 object-contain" />
                        <span class="text-white">${player.name}</span>
                    </div>
                    <span class="font-bold ${colorClass}">${player[statType]}</span>
                </li>`;
        }).join('');

        container.innerHTML = `
            <h3 class="text-lg font-bold text-center ${colorClass} mb-4 border-b border-${colorClass.split('-')[1]}-500 pb-2">${title}</h3>
            <ul class="space-y-3">${listItems}</ul>
        `;
    }

    function updateAllStatLeaders() {
        displayStatLeaders({ containerId: 'top-scorers', statType: 'goals', title: 'Gol Krallığı', colorClass: 'text-yellow-400' });
        displayStatLeaders({ containerId: 'top-assists', statType: 'assists', title: 'Asist Krallığı', colorClass: 'text-green-400' });
        displayStatLeaders({ containerId: 'top-cleansheets', statType: 'cleanSheets', title: 'Clean Sheet', colorClass: 'text-cyan-400' });
    }

    function displayTeams() {
        const container = document.getElementById('teams-container');
        // DÜZELTME: Güvenlik kontrolü eklendi.
        if (!container) return;

        const { teams } = getLeagueDataForSeason('3');
        container.innerHTML = '';

        teams.forEach(team => {
            const card = document.createElement('div');
            card.className = "bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-blue-500/20 transform hover:-translate-y-1";
            card.innerHTML = `
                <div class="flex justify-center mb-4">
                    <img src="${team.logo}" alt="${team.name} logo" class="w-16 h-16 object-contain" />
                </div>
                <h3 class="text-xl font-bold text-white">${team.name}</h3>
                <p class="text-gray-400 text-sm mt-1">Kaptan: ${team.captain}</p>
                <div class="mt-4 pt-4 border-t border-gray-700">
                    <h4 class="text-sm font-semibold text-gray-300 mb-2">Oyuncular</h4>
                    <div class="flex flex-wrap justify-center gap-2">
                        ${(team.players || []).map(player => `<span class="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">${player}</span>`).join('')}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function displayBudgets() {
        const container = document.getElementById('budget-container');
        // DÜZELTME: Güvenlik kontrolü eklendi.
        if (!container) return;

        const { teams } = getLeagueDataForSeason('3');
        container.innerHTML = '';

        teams.forEach(team => {
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
        const container = document.getElementById('suspended-players-container');
        // DÜZELTME: Güvenlik kontrolü eklendi.
        if (!container) return;

        const { teams, playerStats } = getLeagueDataForSeason('3');
        container.innerHTML = '';
        
        const suspendedPlayers = playerStats.filter(p => p.suspension && (p.redCards > 0 || p.yellowCards >= 4));

        if (suspendedPlayers.length === 0) {
            container.innerHTML = '<p class="text-white text-center">Cezalı oyuncu yok.</p>';
            return;
        }

        suspendedPlayers.forEach(player => {
            const team = teams.find(t => t.id === player.teamId);
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


    // --- NAVİGASYON ---
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    // DÜZELTME: Bu fonksiyon artık sadece görünürlüğü yönetmekle kalmıyor, aynı zamanda ilgili bölümün içeriğini de yüklüyor.
    function showSection(id) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === id);
        });
        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });

        // DÜZELTME: Hangi bölümün gösterileceğine bağlı olarak ilgili içeriği yükle.
        // Bu yapı, uygulamanın her zaman güncel veriyi göstermesini sağlar.
        switch (id) {
            case 'puan-durumu':
                displayStandings();
                break;
            case 'fikstur':
                displayFixtures();
                break;
            case 'kralliklar':
                updateAllStatLeaders();
                break;
            case 'eurocup':
                displayEurocupFixtures();
                break;
            case 'takimlar':
                displayTeams();
                break;
            case 'butceler':
                displayBudgets();
                break;
            case 'cezalar':
                displaySuspendedPlayers();
                break;
            // 'anasayfa' ve diğer statik bölümler için bir şey yapmaya gerek yok.
        }

        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }

    function setupNavigation() {
        const allLinks = [...navLinks, ...mobileNavLinks];
        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                // DÜZELTME: URL'yi değiştirmek ve showSection'ı çağırmak artık tek merkezden yönetiliyor.
                window.history.pushState({id: targetId}, '', `#${targetId}`);
                showSection(targetId);
            });
        });

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        window.addEventListener('popstate', () => {
            const hash = window.location.hash.substring(1) || 'anasayfa';
            showSection(hash);
        });
    }


    // --- SAYFA BAŞLATMA ---
    function initializePage() {
        setupNavigation();

        // Olay dinleyicileri
        // DÜZELTME: 'change' eventleri artık kendi fonksiyonlarını çağırıyor, bu doğru bir yaklaşım.
        document.getElementById('seasonSelectStandings').addEventListener('change', displayStandings);
        document.getElementById('seasonSelectFixtures').addEventListener('change', displayFixtures);
        document.getElementById('seasonSelectKings').addEventListener('change', updateAllStatLeaders);
        document.getElementById('seasonSelectEurocup').addEventListener('change', displayEurocupFixtures);

        // Başlangıçta gösterilecek bölümü ve verileri yükle
        const initialHash = window.location.hash.substring(1) || 'anasayfa';
        
        // DÜZELTME: Artık başlangıçta sadece aktif olan bölümün içeriği yükleniyor.
        // Gereksiz yere tüm fonksiyonları çağırmak yerine, showSection bu işi devraldı.
        // Bu, sayfa açılışını hızlandırır ve mantığı basitleştirir.
        showSection(initialHash);
        
        // Footer'daki yılı güncelle
        const currentYearEl = document.getElementById('current-year');
        if (currentYearEl) {
            currentYearEl.textContent = new Date().getFullYear();
        }
    }

    initializePage();
});
