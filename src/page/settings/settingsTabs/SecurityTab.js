import React, {useState} from 'react';

import { Flex, Text, Image, Button, IconButton} from '@chakra-ui/react'

const SecurityTab = () =>{

  return (
    <Flex color="white"  width="1050px" height="1000px" >
              <Text margin="20px"
              className="fusion-text fusion-text-3"><p><strong>I. Informații generale</strong></p>
                  <p>Confidențialitatea datelor dumneavoastră cu caracter personal reprezintă una dintre preocupările
                      principale ale Amplusnet Srl, cu sediul în Târgu Mures, Strada Cuza Vodă, Nr. 61, Ap 1, jud.
                      Mures, Romania, în calitate de operator de date.</p> <p>Acest document are rolul de a vă informa
                      cu privire la prelucrarea datelor dumneavoastră cu caracter personal, în contextul utilizării
                      paginii de internet&nbsp;<a href="https://www.gdprcomplet.ro">www.gdprcomplet.ro</a>. („Site-ul”)
                  </p> <p><strong>II. Categoriile de date cu caracter personal prelucrate</strong></p> <p>
                      <strong>II.1.</strong>&nbsp;Dacă sunteți client al Site-ului,&nbsp;Amplusnet Srl&nbsp;va prelucra
                      datele dumneavoastră cu caracter personal, cum ar fi nume şi prenume, telefon, adresa de e-mail,
                      adresa de facturare, adresa de livrare, date referitoare la modul în care utilizați Site-ul, de
                      exemplu comportamentul/preferinţele/obişnuințele dumneavoastră în cadrul&nbsp;Amplusnet Srl,
                      precum și orice alte categorii de date pe care le furnizați în mod direct în contextul creării
                      contului de utilizator, în contextul plasării unei comenzi prin intermediul site-ului sau în orice
                      alt mod care rezultă din utilizarea Site-ului.</p> <p>Dacă pentru a vă crea cont de utilizator pe
                      Site, utilizați contul dumneavoastră de Facebook sau Google,&nbsp;Amplusnet Srl&nbsp;va prelucra
                      următoarele date publice de profil afişate de aplicaţiile respective: nume utilizator, adresa de
                      e-mail.</p> <p className="nitro-offscreen">În cazul în care alegeți să vă creați cont de
                      utilizator doar înainte de a finaliza comanda unui produs disponibil pe Site, se va solicita
                      adresa dumneavoastră de e-mail în baza căreia va fi creat automat un cont. În cazul în care nu
                      finalizați comanda, adresa de e-mail și celelalte date furnizate nu vor fi stocate
                      de&nbsp;Amplusnet Srl, iar contul creat va fi șters automat.</p> <p className="nitro-offscreen">
                      <strong>II.2.</strong>&nbsp;Dacă sunteți vizitator al Site-ului,&nbsp;Amplusnet Srl&nbsp;va
                      prelucra datele dumneavoastră cu caracter personal pe care le furnizați în mod direct în contextul
                      utilizării Site-ului, cum ar fi datele pe care le furnizați în cadrul secțiunii de contact /
                      întrebări / reclamații, în măsura în care ne contactați în acest fel.</p></Text>

    </Flex>
  );
}


export default SecurityTab;