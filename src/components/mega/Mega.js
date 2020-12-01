import React, { Component } from 'react'
import { Button, Text, TextInput } from 'react-native'
import Estilo from '../estilo'

export default class Mega extends React.Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtdeNumeros)
    //         .fill()
    //         .reduce(num => [...num, this.gerarNumeroNaoContido(nums)], [])
    //         .sort((a, b) => a - b)
    //     this.setState({ numeros })
    // }

    gerarNumeros = () => {
        const { qtdeNumeros } = this.state
        const numeros = []

        for (let i = 0; i < qtdeNumeros; i++) {
            const num = this.gerarNumeroNaoContido(numeros)
            numeros.push(num)
        }

        numeros.sort((a, b) => a - b)

        this.setState({ numeros })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}