document.addEventListener('DOMContentLoaded', function() {

    // --- VERİ ALANI ---
    // Tüm lig verileri tek bir merkezi yerde toplanmıştır.
    // Yeni bir sezon eklemek için sadece bu alana yeni bir '4': { ... } bloğu eklemek yeterlidir.
    const leagueData = {
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
               // ... Sezon 1'in diğer fikstürleri ...
               { week: 10, homeTeamId: 3, awayTeamId: 2, homeScore: 8, awayScore: 4, status: 'Oynandı'},
            ],
            playerStats: [
                { id: 1, name: 'Beltran', teamId: 3, goals: 31, assists: 17, cleanSheets: 0, yellowCards: 0, redCards: 0},
                // ... Sezon 1'in diğer oyuncu istatistikleri ...
                { id: 30, name: 'Sergio Ramos', teamId: 2, goals: 0, assists: 1, cleanSheets: 0, yellowCards: 0, redCards: 0 },
            ]
        },
        '2': {
            teams: [
                { id: 1, name: 'Çankırı İl Özel İdaresi', captain: 'Leroy Sane', players: [], budget:0, logo: 'https://tmssl.akamaized.net//images/wappen/head/69673.png?lm=1541550694' },
                { id: 2, name: 'AOÇ Fenerkusen 23', captain: 'Xabi Alonso', players: [], budget: 0, logo: 'img/fenerkusen.png' },
                // ... Sezon 2'nin diğer takımları ...
                 { id: 7, name: 'FC Barcelona', captain: 'Andres Iniesta', players: [], budget: 0, logo: 'https://upload.wikimedia.org/wikipedia/tr/4/47/FC_Barcelona.png' },
            ],
            fixtures: [
                { week: 1, homeTeamId: 1, awayTeamId: 3, homeScore: 6, awayScore: 3, status: 'Oynandı'},
                // ... Sezon 2'nin diğer fikstürleri ...
                { week: 12, homeTeamId: 6, awayTeamId: 3, homeScore: 3, awayScore: 0, status: 'Oynandı'}
            ],
            playerStats: [
                { id: 1, name: 'Beltran', teamId: 3, goals: 38, assists: 13, cleanSheets: 0, yellowCards: 0, redCards: 0},
                // ... Sezon 2'nin diğer oyuncu istatistikleri ...
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
                // ... Sezon 3'ün diğer fikstürleri ...
                { week: 10, homeTeamId: 2, awayTeamId: 4, homeScore: null, awayScore: null, status: 'Oynanmadı', date: 'Belirsiz' },
            ],
            playerStats: [
                { id: 1, name: 'Beltran', teamId: 1, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0,},
                { id: 2, name: 'Firikinuks', teamId: 3, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0,},
                { id: 6, name: 'Waffle', teamId: 2, goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 1, suspension: {reason: "Sanal mafyalarla ilişki kurmak", bannedWeek: 6}},
                // ... Sezon 3'ün diğer oyuncu istatistikleri ...
            ]
        }
        // YENİ BİR SEZON EKLEMEK İÇİN BURAYA VİRGÜL KOYUP '4': { ... } BLOĞUNU EKLEYİN
    };

    const eurocupData = {
        '24': {
            teams: [
                { id: 1, name: 'Almanya', captain: 'Anastasios Bakasetas', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e9-1f1ea.svg'},
                { id: 2, name: 'Fransa', captain: 'Ryan Kent', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1eb-1f1f7.svg'},
                { id: 3, name: 'İspanya', captain: 'Carlos', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1ea-1f1f8.png' },
                { id: 4, name: 'Türkiye', captain: 'John', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f9-1f1f7.svg'},
            ],
            fixtures: [
                { stageId: 1, week: 1, homeTeamId: 1, awayTeamId: 4, homeScore: 4, awayScore: 1, status: 'Oynandı' },
                { stageId: 1, week: 1, homeTeamId: 2, awayTeamId: 3, homeScore: 3, awayScore: 7, status: 'Oynandı' },
                { stageId: 2, week: 2, homeTeamId: 2, awayTeamId: 1, homeScore: 0, awayScore: 7, status: 'Oynandı' },
                { stageId: 3, week: 2, homeTeamId: 4, awayTeamId: 3, homeScore: 9, awayScore: 1, status: 'Oynandı' }
            ]
        },
        '25': {
            teams: [
                { id: 1, name: 'San Marino', captain: 'Anastasios Bakasetas', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f8-1f1f2.svg'},
                { id: 2, name: 'Kazakistan', captain: 'Ryan Kent', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f0-1f1ff.svg'},
                { id: 3, name: 'İspanya', captain: 'Carlos', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1ea-1f1f8.png' },
                { id: 4, name: 'Malta', captain: 'John', logo: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f2-1f1f9.svg'},
            ],
            fixtures: [
                { stageId: 1, week: 1, homeTeamId: 2, awayTeamId: 3, homeScore: 7, awayScore: 5, status: 'Oynandı',date: '27.06.2025 15:00' },
                { stageId: 1, week: 1, homeTeamId: 1, awayTeamId: 4, homeScore: 17, awayScore: 1, status: 'Oynandı'},
                { stageId: 2, week: 2, homeTeamId: 1, awayTeamId: 2, homeScore: 1, awayScore: 2, status: 'Oynandı', date:'29.06.2025'},
                { stageId: 3, week: 2, homeTeamId: 4, awayTeamId: 3, homeScore: null, awayScore: null, status: 'Oynanmadı', date:'29.06.2025' }
            ]
        }
    };
    
    /**
     * Belirtilen sezon için takım, fikstür ve oyuncu istatistiklerini getirir.
     * @param {string} season - İstenen sezon ('1', '2', '3' vb.).
     * @returns {{teams: Array, fixtures: Array, playerStats: Array}|null} - Sezon verisi veya bulunamazsa null.
     */
    function getDataForSeason(season) {
        return leagueData[season] || null;
    }

    /**
     * Krallıklar (Gol, Asist, Clean Sheet) listesini oluşturan genel fonksiyon.
     * @param {object} options - Görüntüleme seçenekleri.
     * @param {string} options.season - Gösterilecek sezon.
     * @param {string} options.containerId - Listenin ekleneceği HTML elementinin ID'si.
     * @param {string} options.statType - Hesaplanacak istatistik türü ('goals', 'assists', 'cleanSheets').
     * @param {string} options.title - Listenin başlığı.
     * @param {string} options.colorClass - Sayıların ve başlık çizgisinin rengi için Tailwind CSS sınıfı.
     */
    function displayStatLeaders({ season, containerId, statType, title, colorClass }) {
        const data = getDataForSeason(season);
        if (!data) return;

        const { playerStats, teams } = data;
        const container = document.getElementById(containerId);

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
            <h3 class="text-lg font-bold text-center ${colorClass} mb-4 border-b ${colorClass.replace('text', 'border')} pb-2">${title}</h3>
            <ul class="space-y-3">${listItems}</ul>
        `;
    }

    // ... Diğer fonksiyonlar (displayStandings, displayFixtures vb.) da benzer şekilde refactor edilebilir.
    // Şimdilik sadece bu örneği gösteriyorum. Diğer fonksiyonlarınızı da bu yapıya göre güncelleyebilirsiniz.
    // Örneğin displayStandings:

    function displayStandings() {
        const season = document.getElementById('seasonSelectStandings').value;
        const data = getDataForSeason(season);
        if (!data) {
            document.getElementById('standings-table-body').innerHTML = '<tr><td colspan="10" class="text-center p-4">Bu sezon için veri bulunamadı.</td></tr>';
            return;
        }

        const { teams, fixtures } = data;
        const standings = calculateStandings(teams, fixtures); // Bu fonksiyon aynı kalabilir
        const tableBody = document.getElementById('standings-table-body');
        
        let tableHTML = '';
        standings.forEach((team, index) => {
            tableHTML += `
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
        });
        tableBody.innerHTML = tableHTML;
    }
    
    // ... Diğer tüm fonksiyonlar (calculateStandings, displayFixtures, displayTeams vb.) bu yeni veri yapısını kullanacak şekilde güncellenmelidir.
    // calculateStandings fonksiyonu zaten parametre aldığı için doğrudan çalışacaktır.
    // displayFixtures, displayTeams vb. fonksiyonlar da displayStandings gibi düzenlenmelidir.

    function initializePage() {
        // Olay dinleyicileri
        document.getElementById('seasonSelectStandings').addEventListener('change', displayStandings);
        document.getElementById('seasonSelectFixtures').addEventListener('change', displayFixtures);
        document.getElementById('seasonSelectKings').addEventListener('change', updateAllStatLeaders);
        document.getElementById('seasonSelectEurocup').addEventListener('change', displayEurocupFixtures);

        // Başlangıç fonksiyon çağrıları
        displayStandings();
        displayFixtures();
        updateAllStatLeaders();
        displayTeams(); // Bu fonksiyonun da yeni veri yapısına göre güncellenmesi gerekir.
        displayBudgets(); // Bu fonksiyonun da güncellenmesi gerekir.
        displaySuspendedPlayers(); // Hotfix uygulanmış hali kullanılabilir.
        displayEurocupFixtures();
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }
    
    function updateAllStatLeaders() {
        const season = document.getElementById('seasonSelectKings').value;
        displayStatLeaders({ season, containerId: 'top-scorers', statType: 'goals', title: 'Gol Krallığı', colorClass: 'text-yellow-400' });
        displayStatLeaders({ season, containerId: 'top-assists', statType: 'assists', title: 'Asist Krallığı', colorClass: 'text-green-400' });
        displayStatLeaders({ season, containerId: 'top-cleansheets', statType: 'cleanSheets', title: 'Clean Sheet', colorClass: 'text-cyan-400' });
    }

    // Navigasyon kodunuz (showSection vb.) aynı kalabilir.
    // ...

    initializePage(); // Sayfayı başlatan ana fonksiyon
});
