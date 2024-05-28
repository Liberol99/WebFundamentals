function Text({ numbers }) {
    let name = "Orkan";
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <p class="display-4 text-center w-100">
                        <ul>
                            {
                                numbers.map(number => {
                                    return <li>{number}</li>
                                })
                            }
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Text