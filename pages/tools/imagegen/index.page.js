import Button from "./components/button.page";
import Header from "./components/header.page.js";


function Homepage(){
return (
<div className="text-center justify-center py-4 px-4 mx-4 my-4" style={{ background: 'url(/ai_images/ai_image2.png)'}}>
<div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 py-4 px-4 ">
<Header />
<Button />
</div>


</div>


);

}
export default Homepage;
