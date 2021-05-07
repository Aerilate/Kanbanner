#!/usr/bin/env bash

resources=("Service.yaml" "Deployment.yaml")

usage() {
   echo "Creates the necessary k8s resources for deployment."
   echo
   echo "Syntax: deploy.sh [-d|u|h]"
   echo "Options:"
   echo "d     Delete all resources."
   echo "u     Update all resources. Use after editing k8s manifests."
   echo "h     Print this help message."
   echo
}

cmd="create --save-config"


while [[ "$#" -gt 0 ]]; do
    case $1 in
        -d|--delete) cmd="delete";;
        -u|--update) cmd="apply" ;;
        -h|--help)   usage; exit 1 ;;
        *)           echo "Unknown parameter passed: $1"; usage; exit 1 ;;
    esac
    shift
done

for res in ${resources[@]}; do
    echo kubectl ${cmd} -f ${res}
    kubectl ${cmd} -f ${res}
done
