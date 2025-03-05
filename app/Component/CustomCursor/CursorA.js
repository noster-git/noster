export default function CursorA({ className }){
    const arrow = '->'

    return(
        <div className="cursor-A">
            <div className="cursor-A-bg-wrapper">
                <div className="cursor-A-text-wrapper">
                    <p className="cursor-A-text cta-sml">
                        View
                        <div className="cursor-A-arrow-wrapper">
                            <div className="cursor-A-arrow green-txt">
                                {arrow}
                            </div>
                        </div>
                    </p>
                </div>
                <div className="cursor-A-bg" />
            </div>
        </div>
    )
}