
# 5) Escreva um programa que inverta os caracteres de um string.

# Exemplo: se o usuário digitar "teste", o programa deve exibir "etset".

palavra_invertida = []  #Cria uma lista vazia para armazenar a palavra invertida 
palavra = str(input("Digite uma palavra: "))  #Recebe o valor que o usuario digitar e garante que seja uma string

def inverter_string(palavra): # Função que inverte a palavra
    for i in palavra: # Loop que percorre a palavra
        palavra_invertida.insert(0, i) # Insere o valor da palavra na posição 0 da lista e assim por diante
    return ''.join(palavra_invertida) # retorna a lista como uma string

print("Você digitou a palavra: ", palavra) # imprime a palavra digitada

print("A palavra digitada tem ", len(palavra), "caracteres") # imprime o tamanho da palavra

print("A palavra ao contrário é: ", inverter_string(palavra) ) # imprime a palavra invertida

