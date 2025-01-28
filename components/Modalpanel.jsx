export default function Modalpanel(){

    return(
        <>        
            <div id="ModalPanel" className="modal-object" style="display:none">
                <div className="modal-link-close" onclick="$('#ModalPanel').removeclassName('open');$('#ModalPanel-overlay').removeclassName('open');$('input#search').val('');$('ul#searchresults').html('');"></div>
                <div id="ModalPanel-component" className="modal-content">
                    <div className="search-results">
                        <section>
                            <h2 id="tituloresults" className="tituloresults">Resultados encontrados:</h2>
                            <ul id="searchresults" className="searchresults">
                            </ul>
                        </section>
                    </div>

                </div>
            </div>
            <div id="ModalPanel-overlay" className="modal-overlay" onclick="$('#ModalPanel').removeclassName('open');$('#ModalPanel-overlay').removeclassName('open');$('input#search').val('');$('ul#searchresults').html('');"></div>
        </>
    )
}