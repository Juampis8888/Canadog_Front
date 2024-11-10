import CMS from "@/app/Components/CMS/CMS";
import Header from "@/app/Components/LoginStructure/Header";
import Footer from "@/app/Components/LoginStructure/Footer";
import { headers } from 'next/headers';
import { GetPets } from "@/app/Components/Data/Data";
export default async function Home() 
{
	const req = {
		headers: {
			cookie: headers().get('cookie'),
		},
	};

	const result : any = await GetPets(true, "Dog");
	const result2  : any = await GetPets(true, "Cat");
	const result3 : any = await GetPets(true,'HISTORY')

	console.log("HOLA",result.data.result.recordset)
	
	return (
		<>
			<Header/>
				<main className="bg-cover bg-center" style={{backgroundImage:'url("")'}}>
					<CMS Dogs={result.data.result.recordset} Cats={result2.data.result.recordset} History={result3.data.result.recordset}/>
				</main>
			<Footer/>
		</>
	)
}