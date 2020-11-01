/*
* @File: buildings.js
* @Authors: EECS 448 Team 14 - Fall 2020
* @Breif: This file contains a list of KU buildings
*/

//Create a list of buildings that have HTML info about them, latitude, longitude, and a name
const beaches = [
    //AnschutzLibrary----------------------------------------------------------------------------------------------------------------------------------------------
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Anschutz Library</u></h1>' +
            '<div id="bodyContent">' +
            " <div align='center'> <img src='image/AnschutzLibrary.jpg'></div>" +
            "<p>The library houses the Learning Studio, the KU Writing Center, a Reflection Room, " +
            "the IQ Cafe, and scientific and technology holdings. It is a Regional Federal Depository for U.S. documents" +
            " and an official depository library for the United Nations and the European Union.</p>" +
            "<p></p>" + "<p></p>" +
            "<p><b>Address: 1301 Hoch Auditoria Dr, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/anschutzlibrary/" target="_blank">Fraser Hall Homepage</a></b></p>' +
            "</div>", 38.957325, -95.249661, "Anschutz Library"],


    //Fraser Hall----------------------------------------------------------------------------------------------------------------------------------------------
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Fraser Hall</u></h1>' +
            '<div id="bodyContent">' +
            " <div align='center'><img src='image/FraserHall.jpg'></div>" +

            "<p>This building of cottonwood and silverdale limestone opened March 6, 1967. It sits on the" +
            "second-highest point on Mount Oread — 1,031 feet — and is visible for miles.</p>" +
            "<p></p>" + "<p></p>" +

            "<p><b>Address: 1415 Jayhawk Blvd, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/fraser/" target="_blank">Fraser Hall Homepage</a></b></p>' +
            "</div>", 38.957273866157685, -95.24356786041308, "Fraser Hall"],

    //Wescoe Hall----------------------------------------------------------------------------------------------------------------------------------------------
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Wescoe Hall</u></h1>' +
            '<div id="bodyContent">' +
            "<div align='center'><img src='image/WescoeHall.jpg'></div>" +
            "<p>It has about 60 classrooms; Graduate School Dean William P. Albrecht; 300 faculty offices; the departments of " +
            "the offices of the School of Languages," +
            "Literatures & Cultures and the School of Public Affairs & Administration; " +
            "the Ermal Garinger Academic Resource Center; and the Underground food court.</p>" +
            "<p></p>" + "<p></p>" + "<p></p>" +
            "<p><b>Address: 1445 Jayhawk Boulevard, Lawrence, KS 66045 United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/wescoe/" target="_blank">Wescoe Hall Homepage</a></b></p>' +
            "</div>", 38.957784622454255, -95.24777752972496, "Wescoe Hall"],

    //Snow hall----------------------------------------------------------------------------------------------------------------------------------------------
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Snow hall</u></h1>' +
            '<div id="bodyContent">' +
            "<div align='center'><img src='image/SnowHall.png'></div>" +
            "<p>State Architect Charles Cuthbert and H.H. Lane of the zoology" +
            " department collaborated to design this Indiana limestone building in a modified Collegiate Gothic style.</p>" +
            "<p></p>" + "<p></p>" +
            "<p><b>Address: 1460 Jayhawk Blvd, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="https://places.ku.edu/buildings/snow/" target="_blank">Snow Hall Homepage</a></b></p>' +
            "</div>", 38.95892226130865, -95.24899211623296, "Snow Hall"],

    //Lied Center----------------------------------------------------------------------------------------------------------------------------------------------
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Lied Center</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/LiedCenter.jpg'></div>" +//add image

            "<p>Lied center has an auditorium seating almost 2,000 for musical, dance and theatrical performances," +
            "lectures and symposia; the Pavilion, a flexible space with seating for 200; rehearsal and dance studios;" +
            "ticket office; and administrative and educational offices.</p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1600 Stewart Dr, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/liedcenter/" target="_blank">Lied Center Homepage</a></b></p>' +
            "</div>", 38.95511168388419, -95.26276438739704, "Lied Center"],
            
    //KU Engineering----------------------------------------------------------------------------------------------------------------------------------------------
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>KU School of Engineering</u></h1>' +
            '<div id="bodyContent">' +
            " <div align='center'><img src='image/KUEngineering.jpg'></div>"+//add image
            "<p>In 1974 the first of several additions was made, two more floors and a five-story attached building. " +
            "Learned now houses the departments of aerospace engineering; chemical and petroleum engineering; civil, " +
            "and administrative offices; and research and testing labs etc.</p>" +//description
            "<p></p>" + "<p></p>" +//just make space
            "<p><b>Address: Eaton Hall, 1520 W 15th St, Lawrence, KS 66045, United States</b></p>" +"<p></p>" +
            '<p><b>More Information Please go to: <a href="http://engr.ku.edu/" target="_blank">KU Engineering Homepage</a></b></p>' +
    "</div>", 38.95781445088452, -95.25263124321691, "KU Engineering"],
    
    //Dole Instititue of Politics----------------------------------------------------------------------------------------------------------------------------------------------
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Dole Instititue of Politics</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Dole Instititue of Politics.jpg'></div>"+//add image

            "<p>The institute sponsors public and educational programs in bipartisan civic " +
            "education and leadership training; it has seminar and meeting rooms, broadcast facilities," +
            "and exhibits on Dole’s life and career as well as on specific historical or political topics.</p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 2350 Petefish Dr, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/robertjdoleinstitutepolitics/" target="_blank">Dole Instititue of Politi Homepage</a></b></p>' +
    "</div>", 38.955764, -95.265270, "Dole Instititue of Politics"], 
    
    //Allen Fieldhouse----------------------------------------------------------------------------------------------------------------------------------------------
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Allen Fieldhouse</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Allen Fieldhouse.jpg'></div>"+//add image

            "<p>The fieldhouse, a limestone structure designed by State Architect Charles L.It houses media relations offices; " +
            "systems information; facilities and events management;including men's and women's track and basketball; " +
            "an Olympic sports equipment room; and athletics human resources and other administrative offices.</p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1651 Naismith Dr, Lawrence, KS 66044, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/allenfieldhouse/" target="_blank">Allen Fieldhouse Homepage</a></b></p>' +
            "</div>", 38.954984, -95.250932, "Allen Fieldhouse"], 
            
//Burge Union----------------------------------------------------------------------------------------------------------------------------------------------

    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Burge Union</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Burge Union.jpg'></div>"+//add image

            "<p>It has about 33,000 square feet in 1.5 stories and a basement and includes a conference area; " +
            "the offices of KU Legal Services for Students, the Sexual Assault Prevention & Education Centerand  " +
            " the Emily Taylor Center for Women & Gender Equity; and a coffee shop and convenience store. </p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1565 Irving Hill Rd, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/burgeunion/" target="_blank">Burge Union Homepage</a></b></p>' +
            "</div>", 38.955314, -95.254846, "Burge Union"], 
            
//KU Memorial Union----------------------------------------------------------------------------------------------------------------------------------------------	
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>KU Memorial Union</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/KU Memorial Union.jpg'></div>"+//add image

            "<p>The Kansas Union, Burge Union, and the DeBruce Center are operated by a board of directors" +
            "  comprising university students, faculty, alumni and staff. Student Union Activities plans" +
            "  and manages concerts, film series, special observances and other functions. </p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1301 Jayhawk Blvd, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/kansasunion/" target="_blank">Memorial Union Homepage</a></b></p>' +
            "</div>", 38.959381, -95.242828, "KU Memorial Union"],
            
//Spencer Museum of Art----------------------------------------------------------------------------------------------------------------------------------------------	
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Spencer Museum of Art</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Spencer Museum of Art.jpg'></div>"+//add image

            "<p>Its galleries mount exhibits from the permanent collections and touring or special exhibits. " +
            " Special strengths include medieval art; European and American paintings,  " +
            " sculpture and prints; photography; Japanese painting and prints; and quilts and textiles.</p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1301 Mississippi St, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/spencermuseum/" target="_blank">Spencer Museum of Art Homepage</a></b></p>' +
            "</div>", 38.959776, -95.243480, "Spencer Museum of Art"],
            
//Watson Library----------------------------------------------------------------------------------------------------------------------------------------------		
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Watson Library</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Watson Library.jpg'></div>"+//add image

            "<p> Watson houses collections in social sciences, humanities, education, " +
            " journalism and social welfare; administrative and processing offices; " +
            " conservation laboratory; and computer classrooms.</p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1425 Jayhawk Blvd, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/watsonlibrary/" target="_blank">Watson Library Homepage</a></b></p>' +
    "</div>", 38.956662, -95.244823, "Watson Library"],
    
//KU School of Business----------------------------------------------------------------------------------------------------------------------------------------------		
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>KU School Of Business</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/School of Business.jpg'></div>"+//add image

            "<p>The structure has north and south wings joined by a central atrium. It has 20 classrooms and 205 offices; " +
            "multimedia 350- and 125-seat auditoria; labs and flexible spaces to enable student-centered learning and research " +
            "interview rooms for industry meetings and professional development; </p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1654 Naismith Dr, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="https://business.ku.edu//" target="_blank">KU School Of Business Homepage</a></b></p>' +
    "</div>", 38.953925, -95.249485, "KU School Of Business"],

//KU Rec Center----------------------------------------------------------------------------------------------------------------------------------------------		
    
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>KU Rec Center</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Rec Center.jpg'></div>"+//add image

            "<p> KU Recreation Services provides a variety of resources for wellness, physical fitness, team, " +
            "and individual sports,group fitness classes, and personal training. " +
            "Indoor and outdoor facilities accommodate a broad range of athleticism</p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1740 Watkins Center Dr, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="https://recreation.ku.edu/" target="_blank">Rec Center Homepage</a></b></p>' +
    "</div>", 38.952619, -95.24876, "KU Rec Center"],
    
//Campanile Bell Tower----------------------------------------------------------------------------------------------------------------------------------------------		
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>Campanile Bell Tower</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Campanile Bell Tower.jpg'></div>"+//add image

            "<p>Designed by architect Homer F. Neville, a student in the 1920s, and Edward B. Delk," +
            "the bell tower is 120 feet high and built of Kansas limestone. The carillon, played by keyboard-operated" +
    "hammers, has 53 bells cast by an English foundry established in the 1360s. The bells chime the quarter" +
    "hours and hours;</p > " +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: Memorial Dr, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="https://kuhistory.ku.edu/articles/bells-mt-oread/" target="_blank">Campanile Bell Tower Homepage</a></b></p>' +
    "</div>", 38.960308, -95.246882, "Campanile Bell Tower"],

//KU Deparment of Biology----------------------------------------------------------------------------------------------------------------------------------------------				
    ['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>KU Department of Biology</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Deparment of Biology.PNG'></div>"+//add image

            "<p>State Architect James Canole and Peters, Harrison & Associates of" +
            "Lawrence designed the eight-story, $3.5 million building of dark buff" +
    "brick and cottonwood limestone for the newly created Division of" +
    "Biological Sciences. It opened in 1969; a major addition designed by Peters, Kubota &" +
            "Glenn of Lawrence was dedicated April 12, 1986.</p > " +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: Haworth Hall, 1200 Sunnyside Ave, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="https://biology.ku.edu/" target="_blank">Department of Biology Homepage</a></b></p>' +
    "</div>", 38.955995, -95.247858, "KU Department of Biology"],
    
//Hall Center for Humanities----------------------------------------------------------------------------------------------------------------------------------------------				
['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>The Hall Center for Humanities</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Hall Center for Humanities.jpg'></div>"+//add image

            "<p>The center, dedicated April 9, 2005, incorporates nine limestone arches and" +
            "the walls from KU’s oldest surviving structure, the 1887 Powerhouse designed by John G. Haskell." +
            "The center includes a 120-seat conference room, seminar room and offices for Hall Center staff" +
            "and research fellows.</p > " +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 900 Sunnyside Ave, Lawrence, KS 66044, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/centerhumanities/" target="_blank">Hall Center for Humanities Homepage</a></b></p>' +
    "</div>", 38.955786, -95.245101, "The Hall Center for Humanities"],
        
//David Booth Memorial Stadium----------------------------------------------------------------------------------------------------------------------------------------------				
['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>David Booth Kansas Memorial Stadium</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/David Booth Memorial Stadium.jpg'></div>"+//add image

            "<p>David Booth Kansas Memorial Stadium is a football stadium located" +
            "in Lawrence, Kansas, on the campus of the University of Kansas. The stadium is dedicated" +
            "as a memorial to Kansas students who died in World War I, and" + 
            "is one of seven major veteran's memorials on the campus.</p > " +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1101 Mississippi St, Lawrence, KS 66044, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="http://places.ku.edu/buildings/memorialstadium/" target="_blank">David Booth Kansas Memorial Stadium Homepage</a></b></p>' +
    "</div>", 38.963222, -95.245593, "David Booth Kansas Memorial Stadium"],

//Department of Medicinal Chemistry----------------------------------------------------------------------------------------------------------------------------------------------				
['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>KU Department of Medicinal Chemistry</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/Malott Hall.jpg'></div>"+//add image

            "<p>Malott has housed the departments of chemistry and of physics and astronomy and its observatory;" +
            " the departments of medicinal chemistry and pharmacology and toxicology in the School of Pharmacy;" +
    "the Molecular Structures Group of laboratories in mass spectrometry</p>" +//description

            "<p></p>" + "<p></p>" +//just make space

            "<p><b>Address: 1251 Wescoe Hall Dr, Lawrence, KS 66045, United States</b></p>" +
            '<p><b>More Information Please go to: <a href="https://medchem.ku.edu/" target="_blank">Department of Medicinal Chemistry</a></b></p>' +
    "</div>", 38.956595, -95.248277, "KU Department of Medicinal Chemistry"],

//KU Air Force ROTC Office----------------------------------------------------------------------------------------------------------------------------------------------				
['<div id="content">' + '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading"><u>KU Air Force ROTC Office</u></h1>' +
            '<div id="bodyContent">' +

            " <div align='center'><img src='image/KU Air Force ROTC Office.PNG'></div>"+//add image

            "<p>It houses the Reserve Officer Training Corps programs of the the U.S. Air Force," +
            "U.S. Army, and the U.S. Navy; a rifle range and artillery;" +
            "a drill room; classrooms; and offices.</p>" +//description

            "<p></p>" +//just make space

            "<p><b>Address: 1520 Summerfield Hall Drive Military Science Building, Room 109, Lawrence, KS 66045, United States</b></p>" +"<p></p>" +
            '<p><b>More Information Please go to: <a href="https://armyrotc.ku.edu/" target="_blank">KU Air Force ROTC Office Homepage</a></b></p>' +
"</div>", 38.956728, -95.249876, "KU Air Force ROTC Office"], 
];