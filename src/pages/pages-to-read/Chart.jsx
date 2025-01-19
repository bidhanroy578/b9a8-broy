import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid , Tooltip } from 'recharts';
import PropTypes from 'prop-types';


const Chart = ({data}) => {
    // let 
 console.log(data )
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    // const data = [
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //         pv: 9800,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //         pv: 4800,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100,
    //     },
    // ];


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
// let w = window.innerWidth ;
// console.log(w)
let windowSize = () => {
    if(window.innerWidth >= 1440){
        return 1300
    }
    if ( window.innerWidth >= 1024 && window.innerWidth <1440 ){
        return window.innerWidth - 130
    }
    if(window.innerWidth < 1024 ){
        return window.innerWidth - 10
    }
}
let w = windowSize()
    return (
        <BarChart
            width={w}
            height={500}
            data={data}
            // margin={
            //     {
            //         top: 20,
            //         right: 2,
            //         left: 2,
            //         bottom: 30,
            //     }
            // }
        >
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey='page'/>
            <Bar dataKey="page" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
            </Bar>
                <Tooltip />
        </BarChart>
    );
};

export default Chart;


Chart.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array,
};
