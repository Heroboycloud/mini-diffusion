export default function Header({heading="AI",text="image Generator"}){
return(
<div className="flex mx-4 my-4 justify-center text-center">
<h3 className="font-hairline text-lime-300 text-5xl">
{heading}
</h3>
<h4 className="text-pink-50 text-4xl">
&nbsp;{text}
</h4>
</div>
);
}
