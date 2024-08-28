#!/bin/bash

# ******** Support ********

function echo_header() {
    echo ""
    echo "$(tput setaf 3)>>>>>>>> $1 <<<<<<<< $(tput sgr 0)"
}

function echo_success() {
    echo "$(tput setaf 2)$1$(tput sgr 0)"
}

function echo_error() {
    echo "$(tput setaf 1)$1$(tput sgr 0)"
}

# **************** Основной бекенд ****************

# Пулл проекта
function main_git_pull() {
    echo_header "Деплой проекта, ветка: $1"
    cd ${current_path}
    sudo git pull origin $1 || { echo_error "Ошибка при пуле"; exit 1; }
}

# Установка клиента
function client_install() {
    echo_header "Установка клиента"
    cd ${current_path}
    npm install
}

# Билд клиента
function client_build() {

    echo_header "Билд клиента"

    cd ${current_path}

    npm run build && { echo_success "Билд клиента выполнен"; } || { echo_error "Ошибка при билде клиента"; exit 1; }

}

# Публикация клиента
function client_publish() {

    echo_header "Публикация билда клиента"

    cd ${current_path}

    if [[ -d "dist_prod" ]]
    then
        rm -rf "dist_prod" || { echo_error "Ошибка при публикации клиента [1]"; exit 1; }
    fi

    mkdir "dist_prod"

    cp -rf build/* dist_prod || { echo_error "Ошибка при публикации клиента [2]"; exit 1; }

    echo_success "Публикация клиента завершена"

}

# **************** Man ****************

function run_help() {
    echo "НАЗВАНИЕ"
    echo "    run  Скрипт управления и деплоя"
    echo "ПРОТОТИП"
    echo "    run [-option] [arg]"
    echo "ОПИСАНИЕ"
    echo "    Заданный порядок опций определяет порядок операций."
    echo "    Одну и ту же опцию можно использовать несколько раз."
    echo ""
    echo "    Опции:"
    echo "    -d     Операция пулла ветки для всех репозиториев проекта."
    echo "           Данная операция только для продакшн сервера "
    echo "           и только для веток master и dev"
    echo "           В качестве параметра принимает название ветки."
    echo ""
    echo "    -i     Операции установки:"
    echo "           c   - выполнение 'npm install'"
    echo ""
    echo "    -b     Билд:"
    echo "           c   - выполнение 'npm run build"
}

# **************** Пути ****************

current_path=$(pwd)

# **************** Операции ****************

function checkargs() {
    if [[ $OPTARG =~ ^-[dibormsh]$ ]]
    then
        echo_error "Неизвестный аргумент $OPTARG опции $opt"
        exit 1
    fi
}

if [[ -z $* ]]
then
    echo_error "Нет опций"
    exit 1
fi

while getopts ":d:i:b:o:r:m:sn:hn" opt; do
    case ${opt} in

        # help
        h)
            run_help
            ;;

        # deploy
        d)
            checkargs

            case ${OPTARG} in
                master)
                    main_git_pull master
                    #client_git_pull master
                    ;;

                dev)
                    main_git_pull dev
                    #client_git_pull dev
                    ;;

                *)
                    echo_error "Неизвестная ветка для пула ${OPTARG}"
                    exit 1
                    ;;
            esac
            ;;

        # install
        i)
            checkargs

            case ${OPTARG} in

                c)
                    client_install
                    ;;
                *)
                    echo_error "Неизвестный аргумент ${OPTARG} опции -${opt}"
                    exit 1
                    ;;
            esac
            ;;

        # build
        b)
            checkargs

            case ${OPTARG} in

                c)
                    client_build && client_publish
                    ;;
                *)
                    echo_error "Неизвестный аргумент ${OPTARG} опции -${opt}"
                    exit 1
                    ;;
            esac
            ;;

        *)
            echo_error "Неизвестная опция ${OPTARG}"
            ;;
    esac
done