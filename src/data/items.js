const url = "https://my-json-server.typicode.com/andre26z/carrinhoapi/items";



const items = [
	{
		id: 1,
		name: "Internet",
		price: 150,
		planos: ["100mb", "200mb", "300mb"],
		description:
			"A principal tentativa de universalização da internet por banda larga a preços acessíveis é o Programa Nacional de Banda Larga (PNBL), lançado pelo Ministério das Comunicações em 2010, com o objetivo de massificar, até 2014, a oferta de acessos e promover o crescimento da capacidade da infraestrutura de telecomunicações do país. Na verdade, o conceito de universalização é abandonado, substituído pelo de massificação.",
	},
	{
		id: 2,
		name: "Telefone",
		price: 50,
		planos: "ilimitado fixo Brasil",

		description:
			"Primeiramente para entender o que é telefonia fixa é necessário compreender que a transmissão se dá por um aparelho que se liga a outro telefone ou ainda a uma central de condutores metálicos.Nesse equipamento existem dois tipos de circuito, os de conversação e os de marcação, relacionados respectivamente a voz e as chamadas telefônicas.Os sinais provenientes do telefone são transmitidos até a central por meio de dois fios. ",
	},
	{
		id: 3,
		name: "TV",
		price: 100,
		planos: ["Ultimate HD", "Full HD"],
		description:
			"A resolução HD (high definition ou alta definição) foi a primeira a surgir quando as telas finas chegaram ao mercado. Na época, o ganho de definição foi gigantesco quando comparávamos às TVs de tubo. São 1366x720 pixels, ou seja, quase 1 milhão de pixels, em tela de 16:9 (widescreen)..",
	},
];

export default items;

