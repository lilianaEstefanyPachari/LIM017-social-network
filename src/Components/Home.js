export const home = () => {
    const homepage = `<section>
     <header>
        <h1 class="headerTittle">Help Potatoes</h1>
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