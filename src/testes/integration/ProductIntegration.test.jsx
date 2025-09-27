//describle para criar um teste
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Produto } from "../../componentes/Produto";

    describe("Testes de Integração de componente Produto", () => {
        it("Deve aumentar a quantidade de produtos ao clicar no botão +", () => {
            render(<Produto nome="Luva" preco="200"/>);

            const incrementButton = screen.getByTestId("increment-button");
            //Para acionar um evento no teste usamos
           
            fireEvent.click(incrementButton);
            fireEvent.click(incrementButton);
            
            const addToCartButton = screen.getByTestId("add-to-cart-button");

            expect(addToCartButton).toHaveTextContent("Adicionar ao Carrinho (3 produtos)");

        });
    });

describe