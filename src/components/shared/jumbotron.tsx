import LinkButton from './tools/link-button';



export default function Jumbotron() {
    return (
        <div className="p-20 flex flex-col gap-5 items-center justify-center">
            <div className="content w-[900px] flex flex-col  gap-3">
                <h1 className="large-text add-line-height text-center">
                    Elevate Your Business with Our Comprehensive Consultancy Solutions
                </h1>
                <p className='text-center'>
                    At our consulting firm, we pride ourselves on providing specialized services that seamlessly blend technological innovation and legal expertise. Our comprehensive consultancy covers a wide range of critical areas, including IT strategy, cybersecurity, digital transformation, and legal compliance.
                    <br/>
                    <br/>
                    By collaborating closely with our clients, we are able to offer strategic guidance that helps them navigate the complex and ever-evolving business landscape. Our team of experts works tirelessly to mitigate risks and optimize operational frameworks, ensuring that our clients remain aligned with the latest technological advancements and regulatory requirements.
                </p>
            </div>
            <LinkButton to="/signup" className='bg-secondary'>
                Get started today
            </LinkButton>

        </div>
    )
}
