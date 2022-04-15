export const home = () => {
    const homepage = `<section class="homePageContainer">
     <header>
     
     <nav> 
     <h1 class="headerTittle">Help Potatoes</h1>
     <img src="./img/logOutIcon.png" alt="" class="logOutIcon" id="logOutIcon">
     </nav>
        
     </header>

     <section id="profileContainer">
     </section>

     <section class="postContainer" id="postContainer">     
     </section>
    </section>`;
    return homepage;
};

const post = () => {
    const postToShare =
        `<section class="containerPostShare">
    <img src="">
    <p class="userName"></p>
    <img src="" class="threePoints">
        <section class="optionMenu" style="display:none;">
        
        </section>
    <p class="postedComment">
    <img src="" class= "heartIcon">
    <p class="numberOfHearts"></p>
    </section>`
    return postToShare;
}