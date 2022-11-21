#!/bin/bash

############################
### 模組包漢化補丁製作腳本 ###
###### Made by Efina #######
############################

### 設定區 ###

## 模組包名稱

ModPackName=FTB-StoneBlock-3

## 是否生成「模組中文化資源包」

ModsResourcePack_Generate=false

## 要建立進模組包漢化補丁中的陣列

ConfigPath=(config kubejs LICENSE)

### 函數區 ###

## GitHub 環境設置

environment_setup () {
  ## 宣告模組包變數
  
  echo "modpack_name=$ModPackName" >> "$GITHUB_OUTPUT"

  ## 宣告生成資源包變數
  
  echo "mods_gen=$ModsResourcePack_Generate" >> "$GITHUB_OUTPUT"
}

## 製作補丁

patch_maker () {
  ## 設置回主工作區
  
  cd "$GITHUB_WORKSPACE" || exit

  ## 製作一個臨時資料夾
  
  workdir="$(mktemp -d)"

  ## 複製內容到臨時資料夾
  
  for path in "${ConfigPath[@]}"; do
    cp -r "$path" "$workdir/"
  done

  ## 壓縮並製作模組包漢化補丁
  
  cd "$workdir" && zip -r "$OLDPWD/$ModPackName-Patches-$VERSION.zip" *
}


### 主腳本執行 ###

if [ "$1" = 1 ]; then
  environment_setup
elif [ "$1" = 2 ]; then
  patch_maker
else
  echo "錯誤，需指定執行碼！"
  exit 1
fi
