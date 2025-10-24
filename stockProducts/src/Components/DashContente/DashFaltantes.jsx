import useBaseContext from "../../hooks/userBaseContext";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function LowStockTinyBarChart() {
    const { base } = useBaseContext();

    // Filtra apenas os produtos com quantidade menor que 5
    const filteredProducts = base
        ?.filter((product) => product.quantity < 5)
        .slice(0, 5) || [];

    if (filteredProducts.length === 0) {
        return <p className="text-center text-gray-500">Nenhum produto com baixo estoque.</p>;
    }

    return (

        <ResponsiveContainer width="100%" height={150} >
            <BarChart
                data={filteredProducts}
                margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
                <XAxis
                    dataKey="name"
                    tick={{ fontSize: 10 }}
                    interval={0}
                    angle={-25}
                    textAnchor="end"


                />
                <Tooltip formatter={(value, name) => [`${value}`, name === "quantity" ? "Quantidade" : name]}
                    cursor={{ fill: "#1F1F1F" }}

                    contentStyle={{

                        width: "100%",
                        backgroundColor: '#1e293b',
                        borderRadius: '8px',
                        color: '#fff',
                        border: '8px',
                        padding: '8px 12px',
                        fontSize: "10px",
                    }}
                    itemStyle={{
                        color: "#fff",
                        fontSize: "12px",
                    }}
                />
                <Bar dataKey="quantity" fill="#0065FC"
                    radius={[4, 4, 0, 0]}  style={{ cursor: 'pointer' }}/>
            </BarChart>
        </ResponsiveContainer>
    );
}
