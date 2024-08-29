import { Counter } from '../redux/features/counter/Counter'
import { getAllProducts } from '../services/getAllProducts'
import { Card, Col, Row } from 'antd';
import { useQuery } from '@tanstack/react-query';
export default function Home() {
    const { data: allProducts } = useQuery({ queryKey: ['GETPRODUCTS'], queryFn: () => getAllProducts() })

    return (
        <>
            <Row gutter={16}>
                {
                    allProducts?.slice(0, 6).map(product => {
                        return <Col span={8} key={product.id}><Card title={product.title} bordered={true} style={{marginBottom:'1rem',minHeight:'22rem'}}>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                                <span>{product.description}</span>
                                <Counter idProduct={product.id} />
                            </div>
                        </Card>
                        </Col>
                    })
                }
            </Row>
        </>
    )
}
