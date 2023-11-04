import React, { useState, useEffect } from 'react';
import { Text, View,  ScrollView, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import style from '../CadastroEvento/style';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config"
import DropDownPicker from 'react-native-dropdown-picker';
import { LinearGradient } from 'expo-linear-gradient';

export default CadastroEvento = ({ navigation }) => {
    const usuario = auth.currentUser;
    const [date, setDate] = useState(new Date())
    const [opentype, setOpentype] = useState(false);
    const [valuetype, setvalueType] = useState(null);
    const [type, setType] = useState([
        { label: 'Entretenimento', value: 'entretenimento' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Parque', value: 'parque' },
        { label: 'Competições', value: 'competicoes' },
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
        { label: 'Acentos Adaptados', value: 'acentosAdaptados' },
        { label: 'Braille', value: 'braille' },
        { label: 'Corredores Adaptados', value: 'corredoresAdaptados' },
        { label: 'Elevadores', value: 'elevador' },
        { label: 'Estacionamento Preferencial', value: 'estacionamentoPreferencial' },
        { label: 'Piso Tátil', value: 'pisoTatil' },
        { label: 'Portas Adaptadas', value: 'portasAdaptadas' },
        { label: 'Rampas', value: 'rampas' },
        { label: 'Sanitários Adaptados', value: 'sanitariosAdaptados' },
        { label: 'Sinalização', value: 'sinalizacao' },
    ]);
    const [dataEvento, setDataEvento] = useState(''); // Adicione este estado para armazenar a data
    const [horaEvento, setHoraEvento] = useState(''); // Adicione este estado para armazenar a hora

    function CadastroEvento() {
      Alert.alert("Aviso", "Evento cadastrado com sucesso")
    }

    // Função para formatar a data
    const formatarData = (texto) => {
        // Remove todos os caracteres não numéricos
        const numeros = texto.replace(/\D/g, '');

        // Aplica a formatação da data (DD.MM.AAAA)
        if (numeros.length >= 8) {
            const dia = numeros.slice(0, 2);
            const mes = numeros.slice(2, 4);
            const ano = numeros.slice(4, 8);
            setDataEvento(`${dia}.${mes}.${ano}`);
        } else {
            setDataEvento(numeros);
        }
    };

    // Função para formatar a hora
    const formatarHora = (texto) => {
        // Remove todos os caracteres não numéricos
        const numeros = texto.replace(/\D/g, '');

        // Aplica a formatação da hora (HH:MM)
        if (numeros.length >= 4) {
            const hora = numeros.slice(0, 2);
            const minuto = numeros.slice(2, 4);
            setHoraEvento(`${hora}:${minuto}`);
        } else {
            setHoraEvento(numeros);
        }
    };

    useEffect(() => {
        //Função de criar evento
        async function evento() {
            await addDoc(collection(db, "eventos"), {
                Endereço: "Praça Charles Miller, 0, Pacaembu, São Paulo - SP",
                acessibilidade: {
                    acentosAdaptados: false,
                    braille: false,
                    corredoresAdaptados: false,
                    elevador: true,
                    estacionamentoPreferencial: true,
                    pisoTatil: false,
                    portasAdaptadas: false,
                    rampas: false,
                    sanitariosAdaptados: true,
                    sinalizacao: true,
                },
                data: `${dataEvento} ${horaEvento}`, // Use a data e hora formatadas
                descricao: "Bem-vindos à Corrida da Terceira Idade, um evento emocionante que celebra a sabedoria, a vitalidade e a determinação dos nossos participantes mais experientes! Esta corrida única foi projetada com o intuito de promover um estilo de vida ativo e saudável entre os idosos, incentivando a prática de exercícios físicos e a socialização entre gerações.",
                nome: "Maratona Terceira Idade",
                tipo: "corrida",
            });
        }
        evento()
    }, [dataEvento, horaEvento]);

    return (
        <View style={style.container}>
            <Input
                label='Nome do evento'
            />
            <Input
                label="Endereço"
            />
            <Input
                label="Descrição"
            />
            <Input
                label="Data do evento"
                value={dataEvento} // Use o estado formatado
                onChangeText={(texto) => formatarData(texto)} // Aplique a formatação ao texto digitado
                placeholder='Data no formato: DD/MM/AAAA'
                keyboardType='number-pad'
                maxLength={10}
            />
            <Input
                label="Hora do evento"
                value={horaEvento} // Use o estado formatado da hora
                onChangeText={(texto) => formatarHora(texto)} // Aplique a formatação à hora digitada
                placeholder='Hora no formato: HH:MM'
                keyboardType='number-pad'
                maxLength={5}
            />
            <DropDownPicker
                placeholder='Acessibilidade'
                multiple={true}
                min={0}
                max={10}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                mode='BADGE'
                containerStyle={{ height: 40, width: 270, top: 10 }}
                zIndex={3000}
            />
            <DropDownPicker
                placeholder='Tipo do Evento'
                open={opentype}
                value={valuetype}
                items={type}
                setOpen={setOpentype}
                setValue={setvalueType}
                setItems={setvalueType}
                containerStyle={{ height: 40, width: 270, top: 50 }}
                zIndex={2000}
            />
            <View style={{top:75}}>
              <Button
                ViewComponent={LinearGradient}
                buttonStyle={{ borderRadius: 10, height: 40, width: 250}}
                linearGradientProps={style.gradiente}
                title="Cadastrar evento"
                onPress={CadastroEvento}
              />
            </View>

        </View>
    );
};
