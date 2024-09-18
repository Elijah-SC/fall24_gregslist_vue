import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {
  async createHouse(HouseData) {
    const response = await api.post('api/houses', HouseData)
    logger.log(`created House`, response.data)
    const newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }
  async getHouses() {
    const response = await api.get(`api/houses`)
    logger.log(`getting Houses`, response.data)
    const newHouses = response.data.map(housePOJO => new House(housePOJO))
    AppState.houses = newHouses
  }

}

export const housesService = new HousesService()