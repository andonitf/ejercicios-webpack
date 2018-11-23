import * as React from 'react';

interface IMyComponentState {
    pictures: [],
    isLoading: boolean,
}

export default class DemoGallery extends React.Component<{}, IMyComponentState> {
    constructor(props : {}) {
        super(props);
        this.state = { 
            pictures: [],
            isLoading: false,
         };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://www.euskolabelliga.com/json/argazkiakLSM.php?e=1521890221')
        .then(resultado => {
            return resultado.json();
        }).then(data => {
            let imagenes = data.items.map((imagen) => {
                return {
                    url: data.url + imagen.src1,
                    autor: imagen.eg
                }
            })

            this.setState({ pictures: imagenes, isLoading: false });
            // console.log("state", this.state.pictures);
        });  
    }

    public render() {
        function getAuthor(autor: string) {
            return {__html: autor};
        }

        const { pictures, isLoading } = this.state;

        if (isLoading) {
            return <p>Cargando ...</p>
        }

        return (
            pictures.map((imagen, index) =>
                            <div  className="image-item">
                                <img src={imagen['url']} />
                                <label>Autor: </label>
                                <span dangerouslySetInnerHTML={getAuthor(imagen['autor'])} />
                            </div>            
                        )
        );
    }
    
}


// componentDidMount() {

//     fetch('https://picsum.photos/list')
//     .then(resultado => {
//         return resultado.json();
//     }).then(data => {
//         let pictures = data.resultado.map((imagen) => {
//             return (
//                 <div id="picture_{imagen.id}">
//                     <img src="{imagen.post_url}" />
//                     <span>{imagen.author}</span>
//                 </div>
//             )
//         })
//         this.setState(pictures: pictures);
//         console.log("state", this.state.pictures);
//     });
// }
