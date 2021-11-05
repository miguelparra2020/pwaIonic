import Image from 'next/image'

export default function Home() {
  return (
    <ion-grid>
      <ion-row>
        {new Array(36).fill('').map((k, i) => (
          <ion-col key={i} size="4">
            <ion-card>
              <ion-card-header>
                <ion-grid>
                  <ion-row>
                    <ion-col size="2">
                      <ion-chip color="primary">
                        <ion-avatar>
                        <img
                          src="https://http2.mlstatic.com/D_NQ_NP_819213-MCO45776534809_042021-O.webp"
                          alt="Picture of the author"
                          max-width={50}
                          max-height={50}
                        />
                        </ion-avatar>
                        &nbsp;&nbsp;&nbsp;
                        </ion-chip>
                    </ion-col>
                    <ion-col size="8">
                      <ion-card-title>Nombre del Proyecto</ion-card-title>
                      <ion-card-subtitle>Miguel Ángel Páez Parra</ion-card-subtitle>
                    </ion-col>
                    <ion-col size="2">
                      <ion-button color="light">
                        <ion-icon name="exit-outline"></ion-icon>
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>

                  <div>
                  <ion-card-title></ion-card-title>
                  </div>
                  <div>
                  
                  </div>
              </ion-card-header>
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_819213-MCO45776534809_042021-O.webp"
                alt="Picture of the author"
                width={ 400}
                height={400}
              />
              
              <ion-card-content>
                <ion-icon name="pin" slot="start"></ion-icon>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </ion-card-content>
            </ion-card>
          </ion-col>
        ))}
      </ion-row>
    </ion-grid>
  )
}
